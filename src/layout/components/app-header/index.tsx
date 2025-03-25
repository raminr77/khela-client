import { UserIcon } from 'lucide-react';
import { Link } from 'react-router';

import { APP_DATA, APP_ROUTES } from '@/shared/constants';

export function AppHeader() {
  return (
    <header className='flex w-full flex-col overflow-hidden relative select-none'>
      <div className='w-full flex items-center justify-between px-5 mt-7 min-lg:mt-5 z-1 overflow-hidden'>
        <Link
          to={APP_ROUTES.main}
          className='text-2xl text-amber-800 font-title min-sm:bg-white min-sm:px-4 rounded'
        >
          {APP_DATA.name + '!'}
        </Link>
        <div className='size-10 flex items-center justify-center rounded-full bg-white cursor-pointer hover:text-amber-600 duration-200'>
          <UserIcon />
        </div>
      </div>

      <img
        alt=''
        src='/images/main-wave.svg'
        className='absolute top-0 -left-4 right-0 w-full min-w-[110%] min-lg:hidden'
      />
      <div
        style={{ backgroundColor: '#FFA725' }}
        className='w-full h-3 top-0 absolute max-lg:hidden'
      />
    </header>
  );
}
