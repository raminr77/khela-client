import { createDraftSafeSelector } from '@reduxjs/toolkit';

import { UserInitialState } from './user-types';

const userInfo = createDraftSafeSelector(
  (state: { user: UserInitialState }) => state.user,
  (state) => ({
    ...state
  })
);

export const userSelectors = {
  userInfo
};
