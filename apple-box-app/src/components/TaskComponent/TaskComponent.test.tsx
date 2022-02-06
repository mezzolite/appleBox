import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskComponent from './TaskComponent';
import { Task } from '../../types/TaskType';

const mockTask = {
  activity: 'Tell a jest',
  accessibility: 0.1,
  participants: 3,
  price: 5,
  type: 'something',
};

describe('Task Component', () => {
  it('should render with activity', () => {
    render(<TaskComponent isLoading={false} task={mockTask} />);
    const activity = screen.getByText('Tell a jest');
    expect(activity).toBeInTheDocument();
  });

  it('should render an error if an error occurs', () => {
    render(
      <TaskComponent
        isLoading={false}
        task={
          { error: 'No activity found with the specified parameters' } as Task
        }
      />
    );
    const error = screen.getByText(
      'No activity found with the specified parameters'
    );
    expect(error).toBeInTheDocument();
  });
});
