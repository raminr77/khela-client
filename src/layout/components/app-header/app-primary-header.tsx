import { Settings2Icon } from 'lucide-react';
import { Link } from 'react-router';
import { clsx } from 'clsx';

import { APP_DATA, APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

export function AppPrimaryHeader() {
  return (
    <>
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
      <Link
        to={APP_ROUTES.settings}
        className='size-10 flex items-center justify-center text-slate-500'
      >
        <Settings2Icon />
      </Link>
    </>
  );
}
