import { googleLogout } from '@react-oauth/google';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { cleanUserDataAction } from '@/shared/store/features/user/user-slices';
import { requestNotificationPermission } from '@/shared/libs/firebase';
import { Button } from '@/shared/components/ui/button';
import { APP_ROUTES } from '@/shared/constants';
import { toast } from '@/shared/helpers';

export function SettingsPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [notificationToken, setNotificationToken] = useState<string>('');

  const handleLogout = async () => {
    googleLogout();
    dispatch(cleanUserDataAction());
    toast.success({ message: 'We will miss you, Bye! 🤕' });

    navigate(APP_ROUTES.login);
  };

  requestNotificationPermission().then((token) => {
    if (token) {
      setNotificationToken(token);
    }
  });

  return (
    <div className='flex flex-col gap-4'>
      <h3>Settings</h3>

      <textarea className='w-full border border-amber-500 rounded p-2' rows={6}>
        {notificationToken}
      </textarea>

      <Button size='lg' variant='outline' onClick={handleLogout} className='w-full'>
        Logout
      </Button>
    </div>
  );
}
