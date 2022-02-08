import React from 'react';
import { screen } from '@testing-library/react';
import {
  renderWithContext,
  setupDefaultUserState,
} from './store/test_utils/utils';
import App from './App';

test('renders App with header', () => {
  renderWithContext(<App />, {
    preloadWithStore: ({ dispatch }) => {
      setupDefaultUserState(dispatch);
    },
  });

  const headerElement = screen.getByText('AppleBox');
  expect(headerElement).toBeInTheDocument();
});
