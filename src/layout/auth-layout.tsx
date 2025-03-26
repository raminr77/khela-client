import { Link, Navigate, Outlet } from 'react-router';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { userSelectors } from '@/shared/store/features/user/user-selectors';
import { APP_DATA, APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

export function AuthLayout() {
  const { isAuthenticated } = useSelector(userSelectors.userInfo);

  if (isAuthenticated) {
    return <Navigate to={APP_ROUTES.main} replace />;
  }

  return (
    <div className='w-full h-dvh flex items-center justify-center overflow-hidden select-none relative'>
      <img
        alt=''
        loading='lazy'
        src='/images/top-wave.svg'
        className='absolute top-0 -left-2 right-0 w-full min-w-[110%]'
      />

      <img
        alt=''
        loading='lazy'
        src='/images/bottom-wave.svg'
        className={clsx(
          'absolute bottom-0 -left-2 right-0 w-full min-w-[110%]',
          animator({ name: 'slideInUp' })
        )}
      />

      <div
        className={clsx(
          'overflow-hidden border w-8/10 max-w-md p-5 rounded-md flex flex-col items-center justify-center bg-white/10 backdrop-blur-md',
          animator({ name: 'fadeInUp', speed: 'fast' })
        )}
      >
        <Link className='mb-2' to={APP_ROUTES.landing}>
          <img
            width={70}
            height={70}
            loading='lazy'
            alt={APP_DATA.name}
            src='/images/toilet-roll.png'
            className={animator({ name: 'jackInTheBox' })}
          />
        </Link>

        <Outlet />
      </div>
    </div>
  );
}
