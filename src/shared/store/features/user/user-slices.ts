import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { UserInitialState, GoogleUser } from './user-types';

const initialState: UserInitialState = {
  name: '',
  email: '',
  isAuthenticated: false
};

const userSlices = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setGoogleAuthDataAction: (state, action: PayloadAction<GoogleUser>) => ({
      ...state,
      ...action.payload,
      isAuthenticated: true
    }),
    cleanUserDataAction: () => initialState
  }
});

export const { cleanUserDataAction, setGoogleAuthDataAction } = userSlices.actions;

export default userSlices.reducer;
