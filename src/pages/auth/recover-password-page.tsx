import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { Link } from 'react-router';
import { clsx } from 'clsx';

export function RecoverPasswordPage() {
  return (
    <div className='w-full flex flex-col gap-3 text-center items-center justify-center'>
      <h3 className={clsx('text-lg', animator({ name: 'fadeInUp' }))}>
        Recover your password
      </h3>
      <span className={clsx('text-xs', animator({ name: 'fadeInUp' }))}>
        We will send a link to your email address.
      </span>

      <div
        className={clsx('flex flex-col w-full gap-3 mt-8', animator({ name: 'fadeIn' }))}
      >
        <Label htmlFor='recover-page-email'>Email</Label>
        <Input id='recover-page-email' />

        <Button size='lg' className='mt-2'>
          Send Recover Link
        </Button>
      </div>

      <Button variant='link' className='w-full' asChild>
        <Link to={APP_ROUTES.login}>Login to your account</Link>
      </Button>
    </div>
  );
}
