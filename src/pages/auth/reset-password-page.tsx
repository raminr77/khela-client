import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';

import { Link, useParams } from 'react-router';
import { parse as qsParse } from 'qs';
import { clsx } from 'clsx';

export function ResetPasswordPage() {
  const { token } = useParams();
  const { email, key } = qsParse(token ?? '');
  const isNotValid = !token || !email || !key;

  if (isNotValid) {
    return (
      <div className='w-full flex flex-col gap-2 text-center items-center justify-center'>
        <h3 className={clsx('font-title text-2xl', animator({ name: 'fadeInUp' }))}>
          Your link is not valid!
        </h3>
        <Button variant='outline' className='w-full' asChild>
          <Link to={APP_ROUTES.landing}>Return</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='w-full flex flex-col gap-2 text-center items-center justify-center'>
      <h3 className={clsx('font-title text-2xl', animator({ name: 'fadeInUp' }))}>
        Reset your password
      </h3>

      <p className={clsx('text-sm mt-5', animator({ name: 'fadeInUp' }))}>
        {String(email ?? 'Your link is not valid')}
      </p>

      <div
        className={clsx('flex flex-col w-full gap-3 mt-5', animator({ name: 'fadeIn' }))}
      >
        <Label htmlFor='reset-page-password'>New Password</Label>
        <Input id='reset-page-password' />

        <Label htmlFor='reset-page-password'>New Password</Label>
        <Input id='reset-page-password' />

        <Button size='lg' className='mt-2'>
          Set New Password
        </Button>
      </div>

      <Button variant='outline' className='w-full' asChild>
        <Link to={APP_ROUTES.landing}>Cancel</Link>
      </Button>
    </div>
  );
}
