import { GoogleLogin, type CredentialResponse } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { jwtDecode } from 'jwt-decode';

import { setGoogleAuthDataAction } from '@/shared/store/features/user/user-slices';
import { APP_ROUTES } from '@/shared/constants';
import { toast } from '@/shared/helpers';

type GoogleUser = {
  email: string;
  given_name: string;
};

export function GoogleAuthButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleFailure = () => {
    toast.error({
      message: 'Error: Google service failed.'
    });
  };

  const handleSuccess = (response: CredentialResponse) => {
    const data: GoogleUser = jwtDecode(response.credential ?? '');
    const userData = {
      name: data.given_name ?? 'No Name',
      email: data.email
    };
    dispatch(setGoogleAuthDataAction(userData));
    navigate(APP_ROUTES.main);
    toast.success({
      message: 'Welcome to Khela.'
    });
  };

  return (
    <div className='my-4 w-full flex items-center justify-center'>
      <GoogleLogin
        onSuccess={handleSuccess}
        onError={handleFailure}
        text='continue_with'
        useOneTap
      />
    </div>
  );
}
