import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router';

import { isAppInstalled, isLocal } from '@/shared/helpers';
import { AppContainer } from '@/layout/app-container';
import { AuthLayout } from '@/layout/auth-layout';
import { APP_ROUTES } from '@/shared/constants';

import { NotFoundPage } from '@/pages/not-found-page';
import { LandingPage } from '@/pages/landing-page';
import { MainPage } from '@/pages/main/main-page';

import { RecoverPasswordPage } from '@/pages/auth/recover-password-page';
import { ResetPasswordPage } from '@/pages/auth/reset-password-page';
import { AppInstaller } from '@/layout/components/app-installer';
import { UserProfilePage } from '@/pages/user/user-profile-page';
import { SettingsPage } from '@/pages/settings/settings-page';
import { HotNewsPage } from '@/pages/hot-news/hot-news-page';
import { RankingPage } from '@/pages/ranking/ranking-page';
import { RegisterPage } from '@/pages/auth/register-page';
import { LoginPage } from '@/pages/auth/login-page';
import { FriendsPage } from '@/pages/friends/page';
import { UserPage } from '@/pages/user/user-page';
import { TermsPage } from '@/pages/terms-page';

const ROUTES_DATA = [
  {
    isPrivate: true,
    element: <MainPage />,
    path: APP_ROUTES.main
  },
  {
    isPrivate: true,
    path: APP_ROUTES.hotNews,
    element: <HotNewsPage />
  },
  {
    isPrivate: true,
    path: APP_ROUTES.friends,
    element: <FriendsPage />
  },
  {
    isPrivate: true,
    path: APP_ROUTES.ranking,
    element: <RankingPage />
  },
  {
    isPrivate: true,
    path: APP_ROUTES.userProfile,
    element: <UserProfilePage />
  },
  {
    isPrivate: true,
    element: <UserPage />,
    path: `${APP_ROUTES.user}:userId`
  },
  {
    isPrivate: true,
    path: APP_ROUTES.settings,
    element: <SettingsPage />
  },
  {
    isPrivate: false,
    element: <TermsPage />,
    path: APP_ROUTES.terms
  }
] as const;

export function Routes() {
  if (!isAppInstalled() && !isLocal()) {
    return <AppInstaller />;
  }

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
            element={<AppContainer isPrivate={isPrivate}>{element}</AppContainer>}
          />
        ))}

        {/* Not Found */}
        <Route path={APP_ROUTES.notFound} element={<NotFoundPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </ReactRoutes>
    </BrowserRouter>
  );
}
