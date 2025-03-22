import { GoogleAuthButton } from './components/google-auth-button';
import { Checkbox } from '@/shared/components/ui/checkbox';
import { Button } from '@/shared/components/ui/button';
import { Label } from '@/shared/components/ui/label';
import { Input } from '@/shared/components/ui/input';
import { APP_ROUTES } from '@/shared/constants';
import { animator } from '@/shared/helpers';
import { Link } from 'react-router';
import { clsx } from 'clsx';

import { TermsConfirmationModal } from './components/terms-confirmation-modal';
import { DividerLine } from './components/divider-line';

export function RegisterPage() {
  return (
    <div className='w-full flex flex-col gap-3 text-center items-center justify-center'>
      <h3 className={clsx('font-title text-2xl', animator({ name: 'fadeInUp' }))}>
        Create your account
      </h3>
      <span className={clsx('text-xs', animator({ name: 'fadeInUp' }))}>
        Welcome! Please fill in the details to get started.
      </span>

      <GoogleAuthButton />

      <DividerLine />

      <div className={clsx('flex flex-col w-full gap-3', animator({ name: 'fadeIn' }))}>
        <Label htmlFor='register-page-name'>Name</Label>
        <Input id='register-page-name' />
        <Label htmlFor='register-page-email'>Email</Label>
        <Input id='register-page-email' />
        <Label htmlFor='register-page-password'>Password</Label>
        <Input id='register-page-password' type='password' />
        <div className='flex items-center space-x-2 mt-3 mb-1'>
          <Checkbox id='terms' />
          <label htmlFor='terms' className='text-sm bold flex items-center gap-1'>
            <span>Accept terms and conditions</span>
            <TermsConfirmationModal />
          </label>
        </div>
        <Button size='lg' className='mt-2 bg-amber-600'>
          Register
        </Button>
      </div>

      <Button variant='link' className='w-full' asChild>
        <Link to={APP_ROUTES.login}>Login to your account</Link>
      </Button>
    </div>
  );
}
