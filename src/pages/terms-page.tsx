import { Link } from 'react-router';
import { clsx } from 'clsx';

import { TermsContent } from '@/shared/components/terms-content';
import { APP_DATA, APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

export function TermsPage() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <Link to={APP_ROUTES.main}>
        <img
          width={70}
          height={70}
          loading='lazy'
          alt={APP_DATA.name}
          src='/images/logo.png'
          className={clsx('mt-2', animator({ name: 'fadeInUp' }))}
        />
      </Link>

      <h3
        className={clsx(
          'text-center text-xl py-4 text-amber-700',
          animator({ name: 'fadeIn' })
        )}
      >
        Terms and Conditions for Khela!
      </h3>

      <TermsContent />
    </div>
  );
}
