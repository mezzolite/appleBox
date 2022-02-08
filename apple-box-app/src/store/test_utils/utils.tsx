import { configureStore, DeepPartial } from '@reduxjs/toolkit';
import React from 'react';
import { batch, Provider } from 'react-redux';
import { RenderWithContextOptions } from '../../types/TestUtils';
import { RootState } from '../configureStore';
import usersReducer, { UsersActions } from '../users';
import { render } from '@testing-library/react';

export function createReduxStore() {
  const store = configureStore({
    reducer: usersReducer,
    // preloadedState,
  });

  return store;
}

function setupRedux(
  { preloadWithStore }: RenderWithContextOptions = {
    preloadedState: {},
  }
) {
  const store = createReduxStore();

  if (preloadWithStore) {
    batch(() => {
      preloadWithStore(store);
    });
  }

  return store;
}

export function renderWithContext(
  ui: React.ReactElement,
  { preloadWithStore }: RenderWithContextOptions = {
    preloadedState: {},
  }
) {
  const store = setupRedux({ preloadWithStore });

  return {
    store,
    ...render(
      <>
        <React.StrictMode>
          <Provider store={store}>{ui}</Provider>
        </React.StrictMode>
      </>
    ),
  };
}

export function setupDefaultUserState(
  dispatch: ReturnType<typeof createReduxStore>['dispatch']
) {
  dispatch(UsersActions.setCurrentUsername('aPerson'));
  dispatch(UsersActions.setCurrentZipcode('80224'));
}
