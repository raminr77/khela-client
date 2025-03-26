import { PersistGate } from 'redux-persist/integration/react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { getAnalytics } from 'firebase/analytics';
import { createRoot } from 'react-dom/client';
import { initializeApp } from 'firebase/app';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';

import { AppReduxLoader } from '@/layout/components/app-redux-loader';
import { FIREBASE_CONFIGS } from '@/shared/constants';
import { persistor, store } from '@/shared/store';
import { Routes } from '@/routes';

import 'animate.css';

import '@/styles/tailwind.css';
import '@/styles/main.scss';

const app = initializeApp(FIREBASE_CONFIGS);
const analytics = getAnalytics(app);

console.log(analytics);

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
