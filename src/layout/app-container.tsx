import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import type { ReactNode } from 'react';
import { clsx } from 'clsx';

import { userSelectors } from '@/shared/store/features/user/user-selectors';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

import { AppNavbar } from '@/layout/components/app-navbar';
import { AppHeader } from './components/app-header';

interface AppContainerProps {
  isPrivate: boolean;
  children: ReactNode;
}

export function AppContainer({ isPrivate, children }: AppContainerProps) {
  const { isAuthenticated } = useSelector(userSelectors.userInfo);

  if (isPrivate && !isAuthenticated) {
    return <Navigate to={APP_ROUTES.login} replace />;
  }

  return (
    <div
      className={clsx(
        'w-full flex flex-col relative select-none overflow-x-hidden',
        animator({ name: 'fadeIn' })
      )}
    >
      <AppHeader />
      <AppNavbar />
      <div className='px-5 mt-3 pb-20 z-0'>{children}</div>
    </div>
  );
}
