import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import { AuthContainer } from '@/layout/auth-container';
import { AuthLayout } from '@/layout/auth-layout';
import { APP_ROUTES } from '@/shared/constants';

import { NotFoundPage } from '@/pages/not-found-page';
import { LandingPage } from '@/pages/landing-page';
import { MainPage } from '@/pages/main-page';

import { RecoverPasswordPage } from '@/pages/auth/recover-password-page';
import { ResetPasswordPage } from '@/pages/auth/reset-password-page';
import { RegisterPage } from '@/pages/auth/register-page';
import { LoginPage } from '@/pages/auth/login-page';
import { TermsPage } from '@/pages/terms-page';

const ROUTES_DATA = [
  {
    isPrivate: true,
    element: <MainPage />,
    path: APP_ROUTES.main
  },
  {
    isPrivate: false,
    element: <TermsPage />,
    path: APP_ROUTES.terms
  }
] as const;

export function Routes() {
  return (
    <BrowserRouter>
      <ReactRoutes>
        <Route index path={APP_ROUTES.landing} element={<LandingPage />} />

        <Route element={<AuthLayout />}>
          <Route path={APP_ROUTES.login} element={<LoginPage />} />
          <Route path={APP_ROUTES.register} element={<RegisterPage />} />
          <Route path={APP_ROUTES.recoverPassword} element={<RecoverPasswordPage />} />
          <Route
            path={`${APP_ROUTES.resetPassword}:token`}
            element={<ResetPasswordPage />}
          />
        </Route>

        {ROUTES_DATA.map(({ path, element, isPrivate }) => (
          <Route
            key={path}
            path={path}
            element={<AuthContainer isPrivate={isPrivate}>{element}</AuthContainer>}
          />
        ))}

        {/* Not Found */}
        <Route path={APP_ROUTES.notFound} element={<NotFoundPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
