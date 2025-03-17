import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import { APP_ROUTES } from '@/shared/constants';

import { NotFoundPage } from '@/pages/not-found-page';
import { LandingPage } from '@/pages/landing-page';
import { MainPage } from '@/pages/main-page';

import { ForgetPasswordPage } from '@/pages/auth/forget-password-page';
import { RegisterPage } from '@/pages/auth/register-page';
import { LoginPage } from '@/pages/auth/login-page';

const ROUTES_DATA = [
  {
    index: true,
    element: <LandingPage />,
    path: APP_ROUTES.landing
  },
  // AUTH
  {
    index: false,
    element: <LoginPage />,
    path: APP_ROUTES.login
  },
  {
    index: false,
    element: <RegisterPage />,
    path: APP_ROUTES.register
  },
  {
    index: false,
    element: <ForgetPasswordPage />,
    path: APP_ROUTES.forgetPassword
  },
  // APP
  {
    index: false,
    element: <MainPage />,
    path: APP_ROUTES.main
  },
  // NOT FOUND
  {
    index: false,
    element: <NotFoundPage />,
    path: APP_ROUTES.notFound
  },
  {
    path: '*',
    index: false,
    element: <NotFoundPage />
  }
] as const;

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {ROUTES_DATA.map(({ path, element, index }) => (
          <Route key={path} path={path} index={index} element={element} />
        ))}
      </ReactRoutes>
    </BrowserRouter>
  );
}
