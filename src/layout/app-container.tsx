import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import type { ReactNode } from 'react';

import { userSelectors } from '@/shared/store/features/user/user-selectors';
import { APP_ROUTES } from '@/shared/constants';

interface AppContainerProps {
  isPrivate: boolean;
  children: ReactNode;
}

export function AppContainer({ isPrivate, children }: AppContainerProps) {
  const { isAuthenticated } = useSelector(userSelectors.userInfo);

  if (isPrivate && !isAuthenticated) {
    return <Navigate to={APP_ROUTES.login} replace />;
  }

  return <div>{children}</div>;
}
