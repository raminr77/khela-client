import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import { StrictMode } from 'react';

import { store } from '@/shared/store';
import { Routes } from '@/routes';

import 'animate.css';

import '@/styles/tailwind.css';
import '@/styles/main.scss';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Provider store={store}>
      <Routes />
      <Toaster />
    </Provider>
  </StrictMode>
);
