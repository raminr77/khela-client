import { useEffect, useState } from 'react';
import { HomeIcon } from 'lucide-react';
import { Link } from 'react-router';
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
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    console.log('loaded!');
  }, []);

  return (
    <nav
      className={clsx(
        'fixed bottom-0 w-full flex items-center justify-center pb-5 px-5 bg-linear-to-t from-white from-40% to-transparent',
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
                    'translate-y-0': isActive,
                    'translate-y-4': !isActive
                  }
                )}
              >
                <Icon />
                <span
                  className={clsx('text-sm duration-500 w-full text-center pb-1', {
                    'opacity-100': isActive,
                    'opacity-0': !isActive
                  })}
                >
                  {title}
                </span>
              </Link>
            </li>
          );
        })}

        <div
          style={{ transform: `translateX(${activeIndex * 56 + 12 * activeIndex}px)` }}
          className='w-14 h-18 shadow-lg rounded absolute bottom-0 duration-500 transform left-0 bg-linear-to-t from-amber-500 to-transparent'
        />
      </ul>
    </nav>
  );
}
