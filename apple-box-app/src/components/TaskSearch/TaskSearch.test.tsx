import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskSearch from './TaskSearch';

describe('TaskSearch Component', () => {
  it('should render the task button', () => {
    render(<TaskSearch />);
    const taskButton = screen.getByText('Click to get a task');
    expect(taskButton).toBeInTheDocument();
  });
});
