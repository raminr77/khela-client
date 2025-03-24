import { Link } from 'react-router';
import { clsx } from 'clsx';

import { TermsContent } from '@/shared/components/terms-content';
import { Button } from '@/shared/components/ui/button';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

export function TermsPage() {
  return (
    <div className='flex flex-col items-center gap-3 p-5'>
      <Link to={APP_ROUTES.main}>
        <img
          width={70}
          height={70}
          alt='khela logo'
          src='/images/logo.png'
          className={clsx('mt-5', animator({ name: 'jackInTheBox' }))}
        />
      </Link>

      <h3
        className={clsx(
          'font-title text-center text-xl py-4 text-amber-700',
          animator({ name: 'fadeInUp' })
        )}
      >
        Terms and Conditions for Khela!
      </h3>

      <TermsContent />

      <Button asChild className='bg-amber-600 w-full mb-6' size='lg'>
        <Link to={APP_ROUTES.main}>Return to Application</Link>
      </Button>
    </div>
  );
}
