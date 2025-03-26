import { Link, useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { clsx } from 'clsx';

import { loginAction } from '@/shared/store/features/user/user-slices';
import { APP_DATA, APP_ROUTES } from '@/shared/constants';
import { Button } from '@/shared/components/ui/button';
import { Input } from '@/shared/components/ui/input';
import { Label } from '@/shared/components/ui/label';
import { animator, toast } from '@/shared/helpers';

import { GoogleAuthButton } from './components/google-auth-button';
import { DividerLine } from './components/divider-line';

export function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginAction());
    navigate(APP_ROUTES.main);
    toast.success({
      message: `Welcome to ${APP_DATA.name} 💩`
    });
  };

  return (
    <div className='w-full flex flex-col gap-3 text-center items-center justify-center'>
      <h3 className={clsx('text-lg', animator({ name: 'fadeInUp' }))}>
        {`Sign in to ${APP_DATA.name}`}
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

        <Button size='lg' className='mt-2' onClick={handleLogin}>
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
