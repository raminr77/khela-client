import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import '@/styles/tailwind.css';
import '@/styles/main.scss';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <h3 className='underline'>Hello World!</h3>
  </StrictMode>
);
