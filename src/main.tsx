import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';
import { StrictMode } from 'react';

import { Routes } from '@/routes';

import 'animate.css';

import '@/styles/tailwind.css';
import '@/styles/main.scss';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Routes />
    <Toaster />
  </StrictMode>
);
