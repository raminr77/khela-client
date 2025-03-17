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
    element: <LandingPage />,
    path: APP_ROUTES.landing
  },
  // AUTH
  {
    path: APP_ROUTES.login,
    element: <LoginPage />
  },
  {
    path: APP_ROUTES.register,
    element: <RegisterPage />
  },
  {
    path: APP_ROUTES.forgetPassword,
    element: <ForgetPasswordPage />
  },
  // APP
  {
    path: APP_ROUTES.main,
    element: <MainPage />
  },
  // NOT FOUND
  {
    path: APP_ROUTES.notFound,
    element: <NotFoundPage />
  },
  {
    path: '*',
    element: <NotFoundPage />
  }
] as const;

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {ROUTES_DATA.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </ReactRoutes>
    </BrowserRouter>
  );
}
