import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { Link } from 'react-router';
import { clsx } from 'clsx';

import { GoogleAuthButton } from './components/google-auth-button';
import { DividerLine } from './components/divider-line';

export function LoginPage() {
  return (
    <div className='w-full flex flex-col gap-3 text-center items-center justify-center'>
      <h3 className={clsx('font-title text-2xl', animator({ name: 'fadeInUp' }))}>
        Sign in to Khela
      </h3>
      <span className={clsx('text-xs', animator({ name: 'fadeInUp' }))}>
        Welcome back! Please sign in to continue
      </span>

      <GoogleAuthButton />

      <DividerLine />

      <div className={clsx('flex flex-col w-full gap-3', animator({ name: 'fadeIn' }))}>
        <Label htmlFor='login-page-email'>Email</Label>
        <Input id='login-page-email' />
        <Label htmlFor='login-page-password'>Password</Label>
        <Input id='login-page-password' type='password' />

        <Button size='lg' className='mt-2 bg-amber-600'>
          Login
        </Button>
      </div>

      <div className='w-full flex flex-col gap-2 items-center mt-2'>
        <Button variant='link' className='w-full' asChild>
          <Link to={APP_ROUTES.register}>Create new account</Link>
        </Button>
        <Button variant='link' className='w-full' asChild>
          <Link to={APP_ROUTES.recoverPassword}>Recover Your Password</Link>
        </Button>
      </div>
    </div>
  );
}
