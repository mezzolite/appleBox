import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './configureStore';

interface User {
  username: string;
  zipcode: string;
}

const initialState: User = {
  username: '',
  zipcode: '',
};

const users = createSlice({
  name: 'users',
  initialState: {
    ...initialState,
  },
  reducers: {
    setCurrentUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
    setCurrentZipcode(state, action: PayloadAction<string>) {
      state.zipcode = action.payload;
    },
  },
});

function getCurrentItem(state: RootState): User | undefined {
  if (state.users?.username) {
    return {
      username: state.users.username,
      zipcode: state.users.zipcode,
    };
  }
}

export const UsersSelectors = { getCurrentItem };
export const UsersActions = users.actions;
export default users.reducer;
