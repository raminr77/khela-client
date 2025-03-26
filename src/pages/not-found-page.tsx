import { Button } from '@/shared/components/ui/button';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { Link } from 'react-router';
import { clsx } from 'clsx';

export function NotFoundPage() {
  return (
    <main
      className={clsx(
        'w-full h-dvh overflow-hidden flex flex-col items-center justify-center',
        animator({ name: 'fadeIn', speed: 'faster' })
      )}
    >
      <img
        className={clsx('mb-7', animator({ name: 'jackInTheBox' }))}
        src='/images/404-poop.png'
        alt='404 Page Not Found'
        loading='lazy'
        height={100}
        width={100}
      />
      <h1 className={clsx('text-2xl text-amber-600', animator({ name: 'fadeInUp' }))}>
        Ops, not found!
      </h1>

      <div
        className={clsx(
          'text-center mt-4 flex flex-col items-center justify-center',
          animator({ name: 'fadeIn' })
        )}
      >
        <p>This page is gone!</p>
        <p className='mt-2'>Just like when you’re late for the toilet.</p>

        <Button asChild variant='outline' className='mt-6'>
          <Link to={APP_ROUTES.main}>Back to App</Link>
        </Button>
      </div>
    </main>
  );
}
