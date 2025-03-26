import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';

import { cleanUserDataAction } from '@/shared/store/features/user/user-slices';
import { Button } from '@/shared/components/ui/button';
import { APP_ROUTES } from '@/shared/constants';
import { toast } from '@/shared/helpers';

export function SettingsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    googleLogout();
    dispatch(cleanUserDataAction());
    toast.success({ message: 'We will miss you, Bye! 🤕' });

    navigate(APP_ROUTES.landing);
  };

  return (
    <div>
      <h3>Settings</h3>
      <br />
      <br />
      <Button size='lg' variant='outline' onClick={handleLogout} className='w-full'>
        Logout
      </Button>
    </div>
  );
}
