import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TaskSearch from './TaskSearch';
import { useFetchTask } from '../../requests/useFetchTask';

jest.mock('../../requests/useFetchTask');

const mockTask = {
  activity: 'Tell a jest',
  accessibility: 0.1,
  participants: 3,
  price: 5,
  type: 'something',
};

describe('TaskSearch Component', () => {
  it('should render the task button', () => {
    const mockUseFetchTask = useFetchTask as jest.MockedFunction<
      typeof useFetchTask
    >;
    mockUseFetchTask.mockImplementation(() => ({
      loading: false,
      task: mockTask,
    }));

    render(<TaskSearch />);

    const taskButton = screen.getByText('Click to get a task');
    expect(taskButton).toBeInTheDocument();
  });

  it('should fetch task  and render task component on button click', () => {
    const mockUseFetchTask = useFetchTask as jest.MockedFunction<
      typeof useFetchTask
    >;
    mockUseFetchTask.mockImplementation(() => ({
      loading: false,
      task: mockTask,
    }));

    render(<TaskSearch />);

    const taskButton = screen.getByText('Click to get a task');
    fireEvent.click(taskButton);
    expect(mockUseFetchTask).toHaveBeenCalled();

    const taskComponent = screen.getByText('Tell a jest');
    expect(taskComponent).toBeInTheDocument();
  });
});
