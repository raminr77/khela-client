import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import { Routes } from '@/routes';

import '@/styles/tailwind.css';
import '@/styles/main.scss';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <Routes />
  </StrictMode>
);
