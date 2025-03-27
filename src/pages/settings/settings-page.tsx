import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useRef, useState } from 'react';

import { cleanUserDataAction } from '@/shared/store/features/user/user-slices';
import { requestNotificationPermission } from '@/shared/libs/firebase';
import { Button } from '@/shared/components/ui/button';
import { APP_ROUTES } from '@/shared/constants';
import { toast } from '@/shared/helpers';

export function SettingsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const isFirstLoad = useRef<boolean>(true);
  const [notificationToken, setNotificationToken] = useState<string>('');

  const handleLogout = async () => {
    googleLogout();
    dispatch(cleanUserDataAction());
    toast.success({ message: 'We will miss you, Bye! 🤕' });

    navigate(APP_ROUTES.login);
  };

  if (isFirstLoad.current) {
    requestNotificationPermission().then((token) => {
      setNotificationToken(token || 'None');
    });
    isFirstLoad.current = false;
  }

  return (
    <div className='flex flex-col gap-4'>
      <h3>Settings</h3>

      <textarea
        value={notificationToken}
        className='w-full border border-amber-500 rounded p-2'
        rows={6}
      />

      <Button size='lg' variant='outline' onClick={handleLogout} className='w-full'>
        Logout
      </Button>
    </div>
  );
}
