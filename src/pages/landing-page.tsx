import { Link, Navigate } from 'react-router';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

import { userSelectors } from '@/shared/store/features/user/user-selectors';
import { APP_DATA, APP_ROUTES } from '@/shared/constants';
import { Button } from '@/shared/components/ui/button';
import { animator } from '@/shared/helpers';

export function LandingPage() {
  const { isAuthenticated } = useSelector(userSelectors.userInfo);

  if (isAuthenticated) {
    return <Navigate to={APP_ROUTES.main} replace />;
  }

  return (
    <main className='w-full h-dvh overflow-hidden flex items-center justify-center flex-col p-5 select-none relative'>
      <img
        alt=''
        loading='lazy'
        src='/images/top-wave.svg'
        className='absolute top-0 -left-2 right-0 w-full min-w-[110%]'
      />

      <section className='flex flex-col items-center gap-3'>
        <img
          width={100}
          height={100}
          loading='lazy'
          alt={APP_DATA.name}
          src={APP_DATA.logo}
          className={animator({ name: 'jackInTheBox' })}
        />
        <img
          loading='lazy'
          alt={APP_DATA.name}
          className='h-10 my-2'
          src='/images/khela-text-logo.svg'
        />
        <p className='text-sm'>A Fun Project For</p>
        <p className='text-sm'>Sharing your PEE and POOP with friends!</p>
        <p
          className={clsx(
            'text-sm mt-2 rounded bg-slate-100 p-4',
            animator({ name: 'fadeIn', delay: '1s' })
          )}
        >
          In Persian, especially in the dialect of Isfahan,
          <br />
          &#34;Khela&#34; (خِلا) is a slang word for toilet.
        </p>
        <Button
          asChild
          size='lg'
          className={clsx('w-full mt-3', animator({ name: 'fadeIn', delay: '1s' }))}
        >
          <Link to={APP_ROUTES.login}>Login</Link>
        </Button>
        <Button
          asChild
          size='lg'
          variant='outline'
          className={clsx('w-full', animator({ name: 'fadeIn', delay: '1s' }))}
        >
          <Link to={APP_ROUTES.register}>Create Account</Link>
        </Button>
      </section>

      <div className='absolute bottom-5 text-sm text-slate-500 w-full text-center'>
        Version {APP_DATA.version}
      </div>
    </main>
  );
}
