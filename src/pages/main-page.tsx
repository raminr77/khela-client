import { useRef } from 'react';

import { getNotificationPermission } from '@/shared/helpers';

export function MainPage() {
  const isFirstLoad = useRef(true);

  if (isFirstLoad.current) {
    getNotificationPermission();
    isFirstLoad.current = false;
  }

  return (
    <div>
      <h3>Main Page</h3>
    </div>
  );
}
