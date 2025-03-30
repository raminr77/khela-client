import { BellIcon, BellDotIcon, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { clsx } from 'clsx';

import { APP_DATA, APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

import { AppUserScoresHeader } from './app-user-scores-header';

export function AppSecondaryHeader() {
  const navigate = useNavigate();
  const hasUnread = false;

  return (
    <div
      className={clsx(
        'flex items-center justify-between w-full',
        animator({ name: 'fadeIn', speed: 'faster' })
      )}
    >
      <ChevronLeft
        className={animator({ name: 'slideInLeft' })}
        onClick={() => navigate(-1)}
      />

      <Link
        to={APP_ROUTES.main}
        className={clsx('text-2xl text-amber-800', animator({ name: 'slideInLeft' }))}
      >
        <img
          loading='lazy'
          className='h-7'
          alt={APP_DATA.name}
          src='/images/khela-text-logo.svg'
        />
      </Link>

      <div className='flex gap-2 items-center'>
        <AppUserScoresHeader />
        <Link
          to={APP_ROUTES.hotNews}
          className='size-10 flex items-center justify-center'
        >
          {hasUnread ? (
            <BellDotIcon className='text-amber-600' />
          ) : (
            <BellIcon className='text-slate-600' />
          )}
        </Link>
      </div>
    </div>
  );
}
