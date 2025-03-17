import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

import './styles/main.css';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <h3 className='underline'>Hello World!</h3>
  </StrictMode>
);
