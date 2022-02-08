import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithContext } from '../../store/test_utils/utils';
import Main from './Main';

describe('Main Component', () => {
  it('should render with task instruction', () => {
    renderWithContext(<Main />);
    const taskInstruction = screen.getByText(
      'Please add a username and zipcode to start'
    );
    expect(taskInstruction).toBeInTheDocument();
  });
});
