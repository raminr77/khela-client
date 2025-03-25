import { Link, useLocation } from 'react-router';
import { HomeIcon } from 'lucide-react';
import { useState } from 'react';
import { clsx } from 'clsx';

import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

const NAV_ITEMS = [
  {
    title: 'Home',
    Icon: HomeIcon,
    url: APP_ROUTES.main
  },
  {
    title: 'Home',
    Icon: HomeIcon,
    url: APP_ROUTES.main
  },
  {
    title: 'Home',
    Icon: HomeIcon,
    url: APP_ROUTES.main
  },
  {
    title: 'Home',
    Icon: HomeIcon,
    url: APP_ROUTES.main
  },
  {
    title: 'Home',
    Icon: HomeIcon,
    url: APP_ROUTES.terms
  }
] as const;

export function AppNavbar() {
  const { pathname } = useLocation();
  const routeIndex = NAV_ITEMS.findIndex(({ url }) => url.match(pathname));
  const [activeIndex, setActiveIndex] = useState<number>(routeIndex || 2);

  if (routeIndex === -1) {
    return null;
  }

  return (
    <nav
      className={clsx(
        'fixed bottom-0 w-full flex items-center justify-center pb-4 px-5 bg-white border-t border-amber-500 z-40',
        animator({ name: 'fadeInUp' })
      )}
    >
      <ul className='flex items-cente relative justify-center gap-3'>
        {NAV_ITEMS.map(({ title, Icon, url }, index) => {
          const isActive = activeIndex === index;
          return (
            <li key={`nav-${index}-${title}`} className='w-14 overflow-hidden z-10'>
              <Link
                to={url}
                onClick={() => setActiveIndex(index)}
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
                    'text-sm duration-500 w-full text-center pb-1 text-amber-900',
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
          style={{ transform: `translateX(${activeIndex * 56 + 12 * activeIndex}px)` }}
          className='w-14 h-18 shadow-lg rounded absolute bottom-0 duration-500 transform left-0 bg-[#FFA725]'
        />
      </ul>
    </nav>
  );
}
