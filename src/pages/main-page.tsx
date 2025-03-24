import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { cleanUserDataAction } from '@/shared/store/features/user/user-slices';
import { Button } from '@/shared/components/ui/button';
import { APP_ROUTES } from '@/shared/constants';

export function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    googleLogout();
    dispatch(cleanUserDataAction());
    navigate(APP_ROUTES.login);
  };

  return (
    <div className='flex flex-col gap-5 items-center justify-center p-5 w-full h-dvh'>
      <h3>Main Page</h3>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
