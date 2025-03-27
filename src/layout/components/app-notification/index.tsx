import { BellRingIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { clsx } from 'clsx';

import { requestNotificationPermission, onMessageListener } from '@/shared/libs/firebase';
import { Button } from '@/shared/components/ui/button';
import { animator, toast } from '@/shared/helpers';

export function AppNotification() {
  const isFirstLoad = useRef<boolean>(true);
  const [hidePermissionBanner, sethidePermissionBanner] = useState<boolean>(false);

  const handleUserAction = (approve = false) => {
    if (approve) {
      requestNotificationPermission();
    }
    sethidePermissionBanner(true);
  };

  onMessageListener().then(() => {
    toast.info({ message: 'You have a new message!' });
  });

  if (isFirstLoad.current) {
    Notification.requestPermission().then((permission) => {
      sethidePermissionBanner(permission === 'granted');
    });
    isFirstLoad.current = false;
  }

  if (hidePermissionBanner) {
    return null;
  }

  return (
    <div
      className={clsx(
        'w-full h-dvh fixed top-0 left-0 z-50 bg-white/90 select-none flex items-center justify-center flex-col gap-4',
        animator({ name: 'fadeIn' })
      )}
    >
      <BellRingIcon
        size={64}
        className={clsx('text-amber-600 mb-5', animator({ name: 'jackInTheBox' }))}
      />
      <span>Allow to enable notifications?</span>
      <div className='flex items-center justify-center gap-3 mt-2'>
        <Button
          className='w-full'
          variant='outline'
          onClick={() => handleUserAction(false)}
        >
          No
        </Button>
        <Button className='w-full' onClick={() => handleUserAction(true)}>
          Yes
        </Button>
      </div>
    </div>
  );
}
