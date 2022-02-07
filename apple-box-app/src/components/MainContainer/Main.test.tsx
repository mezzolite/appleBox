import React from 'react';
import { render, screen } from '@testing-library/react';
import Main from './Main';

describe('Main Component', () => {
  it('should render with task instruction', () => {
    render(<Main />);
    const taskInstruction = screen.getByText(
      'Please add a username and zipcode to start'
    );
    expect(taskInstruction).toBeInTheDocument();
  });
});
