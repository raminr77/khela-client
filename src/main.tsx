import { createRoot } from 'react-dom/client';
import { StrictMode } from 'react';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <h3>Hello World!</h3>
  </StrictMode>
);
