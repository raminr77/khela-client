import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { Link } from 'react-router';
import { clsx } from 'clsx';

export function LoginPage() {
  return (
    <div className='w-full flex flex-col gap-3 text-center items-center justify-center'>
      <h3 className={clsx('font-title text-2xl', animator({ name: 'fadeInUp' }))}>
        Sign in to Khela!
      </h3>
      <span className={clsx('text-xs', animator({ name: 'fadeInUp' }))}>
        Welcome back! Please sign in to continue
      </span>

      <div className='my-4 w-full'>
        <Button variant='outline' className='w-full'>
          <img width={18} height={18} src='/images/google.png' alt='Google' />
          Continue With Google
        </Button>
      </div>

      <div className='w-full flex items-center gap-4 text-xs mb-4'>
        <span className='w-full border-t border-slate-200' />
        <span>OR</span>
        <span className='w-full border-t border-slate-200' />
      </div>

      <div className={clsx('flex flex-col w-full gap-3', animator({ name: 'fadeIn' }))}>
        <Label htmlFor='login-page-email'>Email</Label>
        <Input id='login-page-email' />
        <Label htmlFor='login-page-password'>Password</Label>
        <Input id='login-page-password' type='password' />

        <Button size='lg' className='mt-2 bg-amber-600'>
          Login
        </Button>
      </div>

      <Button variant='link' className='w-full' asChild>
        <Link to={APP_ROUTES.register}>Create new account</Link>
      </Button>
    </div>
  );
}
