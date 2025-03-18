import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import { AuthContainer } from '@/layout/auth-container';
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
    isPrivate: false,
    element: <LandingPage />,
    path: APP_ROUTES.landing
  },
  // AUTH
  {
    index: false,
    isPrivate: false,
    element: <LoginPage />,
    path: APP_ROUTES.login
  },
  {
    index: false,
    isPrivate: false,
    element: <RegisterPage />,
    path: APP_ROUTES.register
  },
  {
    index: false,
    isPrivate: false,
    element: <ForgetPasswordPage />,
    path: APP_ROUTES.forgetPassword
  },
  // APP
  {
    index: false,
    isPrivate: true,
    element: <MainPage />,
    path: APP_ROUTES.main
  },
  // NOT FOUND
  {
    index: false,
    isPrivate: false,
    element: <NotFoundPage />,
    path: APP_ROUTES.notFound
  },
  {
    path: '*',
    index: false,
    isPrivate: false,
    element: <NotFoundPage />
  }
] as const;

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        {ROUTES_DATA.map(({ path, element, index, isPrivate }) => (
          <Route
            key={path}
            path={path}
            index={index}
            element={<AuthContainer isPrivate={isPrivate}>{element}</AuthContainer>}
          />
        ))}
      </ReactRoutes>
    </BrowserRouter>
  );
}
