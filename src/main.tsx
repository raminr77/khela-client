import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('app')!).render(
  <StrictMode>
    <h3>Hello World!</h3>
  </StrictMode>
);
