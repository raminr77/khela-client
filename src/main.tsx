import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';

import { AppReduxLoader } from '@/layout/components/app-redux-loader';
import { persistor, store } from '@/shared/store';
import { Routes } from '@/routes';

import 'animate.css';

import '@/styles/tailwind.css';
import '@/styles/main.scss';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_OAUTH_CLIENT_ID ?? ''}>
      <Provider store={store}>
        <PersistGate loading={<AppReduxLoader />} persistor={persistor}>
          <Routes />
          <Toaster />
        </PersistGate>
      </Provider>
    </GoogleOAuthProvider>
  </StrictMode>
);
