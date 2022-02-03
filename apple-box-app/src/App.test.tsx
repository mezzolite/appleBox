import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App with header', () => {
  render(<App />);
  const headerElement = screen.getByText('AppleBox');
  expect(headerElement).toBeInTheDocument();
});
