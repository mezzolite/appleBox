import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskComponent from './TaskComponent';
import useFetchTask from '../../requests/useFetchTask';

jest.mock('../../requests/useFetchTask');

const mockTask = {
  activity: 'Tell a jest',
  accessibility: 0.1,
  participants: 3,
  price: 5,
  type: 'something',
};

describe('Task Component', () => {
  it('should render with activity', () => {
    const mockUseFetchTask = useFetchTask as jest.MockedFunction<
      typeof useFetchTask
    >;
    mockUseFetchTask.mockImplementation(() => ({
      loading: false,
      task: mockTask,
    }));
    render(<TaskComponent />);
    const activity = screen.getByText('Tell a jest');
    expect(activity).toBeInTheDocument();
  });
});
