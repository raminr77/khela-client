import { apiService } from '@/shared/services/api-service';
import { setupListeners } from '@reduxjs/toolkit/query';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    [apiService.reducerPath]: apiService.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiService.middleware)
});

setupListeners(store.dispatch);
