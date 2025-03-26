import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { clsx } from 'clsx';

import { animator, getNavbarMenuIndex } from '@/shared/helpers';
import { APP_NAVBAR_ROUTES } from '@/shared/constants';

export function AppNavbar() {
  const { pathname } = useLocation();
  const navbarRouteIndex = getNavbarMenuIndex(pathname);
  const isNavbarItem = navbarRouteIndex !== -1;
  const [activeIndex, setActiveIndex] = useState<number>(
    isNavbarItem ? navbarRouteIndex : 2
  );

  if (!isNavbarItem) {
    return null;
  }

  if (activeIndex !== navbarRouteIndex) {
    setActiveIndex(navbarRouteIndex);
  }

  // INDICATOR FORMULA
  // ( index * ( item width - gap ) ) + ( index * gap )
  const indicatorPosition = activeIndex * 64 - 8 + activeIndex * 8;
  return (
    <nav
      className={clsx(
        'fixed bottom-0 w-full flex items-center justify-center pb-4 px-5 bg-white border-t border-amber-500 z-40',
        animator({ name: 'slideInUp', speed: 'fast' })
      )}
    >
      <ul className='flex items-cente relative justify-center gap-2'>
        {APP_NAVBAR_ROUTES.map(({ title, Icon, url }, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={`nav-${index}-${title}`} className='w-16 overflow-hidden z-10'>
              <Link
                to={url}
                // onClick={() => setActiveIndex(index)}
                className={clsx(
                  'flex flex-col gap-1 items-center justify-center pb-1 duration-500 transform',
                  {
                    'translate-y-0 text-amber-900': isActive,
                    'translate-y-4 text-slate-500': !isActive
                  }
                )}
              >
                <Icon />
                <span
                  className={clsx(
                    'text-xs duration-500 w-full text-center pb-2 text-amber-900',
                    {
                      'opacity-100': isActive,
                      'opacity-0': !isActive
                    }
                  )}
                >
                  {title}
                </span>
              </Link>
            </li>
          );
        })}

        <div
          style={{ transform: `translateX(${indicatorPosition}px)` }}
          className='w-20 h-20 shadow-lg rounded absolute bottom-0 duration-500 transform left-0 -top-4 bg-[#FFA725]'
        />
      </ul>
    </nav>
  );
}
