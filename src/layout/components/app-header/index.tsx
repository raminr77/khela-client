import { useLocation } from 'react-router';
import { clsx } from 'clsx';

import { getNavbarMenuIndex } from '@/shared/helpers';

import { AppSecondaryHeader } from './app-secondary-header';
import { AppPrimaryHeader } from './app-primary-header';

export function AppHeader() {
  const { pathname } = useLocation();
  const isNavbarItem = getNavbarMenuIndex(pathname) !== -1;

  return (
    <header className='flex w-full flex-col overflow-hidden relative select-none z-40'>
      <div
        className={clsx(
          'w-full h-10 flex items-center justify-between px-5 mt-6 pb-1 min-lg:mt-5 z-0 overflow-hidden',
          {
            'border-b border-slate-200': !isNavbarItem
          }
        )}
      >
        {isNavbarItem ? <AppPrimaryHeader /> : <AppSecondaryHeader />}
      </div>

      <img
        alt=''
        loading='lazy'
        src='/images/main-wave.svg'
        className='fixed top-0 -left-4 right-0 w-full min-w-[110%] min-md:hidden duration-500 z-10'
      />
      <div className='w-full h-3 top-0 absolute max-md:hidden bg-[#FFA725]' />
    </header>
  );
}
