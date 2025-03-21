import { Button } from '@/shared/components/ui/button.tsx';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { Link } from 'react-router';
import { clsx } from 'clsx';

export function NotFoundPage() {
  return (
    <main
      className={clsx(
        'w-full h-screen overflow-hidden flex flex-col items-center justify-center',
        animator({ name: 'fadeIn' })
      )}
    >
      <img
        className={clsx('mb-7', animator({ name: 'bounce' }))}
        src='/images/404-poop.png'
        alt='404 Page Not Found'
        height={100}
        width={100}
      />
      <h1 className='font-title text-2xl text-amber-600'>Something smells off…</h1>
      <p className='text-center mt-4'>This page is gone!</p>
      <p className='text-center mt-2'>Just like when you’re late for the toilet.</p>

      <Button asChild variant='outline' className='mt-6'>
        <Link to={APP_ROUTES.main}>Back to Khela!</Link>
      </Button>
    </main>
  );
}
