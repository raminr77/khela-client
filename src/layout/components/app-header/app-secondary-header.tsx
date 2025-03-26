import { BellIcon, BellDotIcon, ChevronLeft } from 'lucide-react';
import { Link, useNavigate } from 'react-router';
import { clsx } from 'clsx';

import { APP_DATA, APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

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
        className={clsx(
          'text-2xl text-amber-800 font-title',
          animator({ name: 'slideInLeft' })
        )}
      >
        {APP_DATA.name + '!'}
      </Link>

      <Link to={APP_ROUTES.hotNews} className='size-10 flex items-center justify-center'>
        {hasUnread ? (
          <BellDotIcon className='text-amber-600' />
        ) : (
          <BellIcon className='text-slate-600' />
        )}
      </Link>
    </div>
  );
}
