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
        className={clsx(
          'text-2xl text-amber-800 font-title',
          animator({ name: 'slideInLeft' })
        )}
      >
        {APP_DATA.name + '!'}
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
