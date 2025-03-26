import {
  getMessaging,
  getToken as getMessagingToken,
  onMessage
} from 'firebase/messaging';
import { getAnalytics } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

import { FIREBASE_CONFIGS } from '@/shared/constants';
import { toast } from '@/shared/helpers';

const app = initializeApp(FIREBASE_CONFIGS);

const analytics = getAnalytics(app);
const messaging = getMessaging(app);

Notification.requestPermission().then((permission) => {
  if (permission === 'granted') {
    getMessagingToken(messaging, { vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY })
      .then((currentNotificationToken) => {
        console.log(currentNotificationToken);
      })
      .catch((error) => {
        console.log('An error occurred while retrieving token. ', error);
      });
  } else {
    toast.error({ message: 'We need permission to send notification. 🥹' });
  }
});

onMessage(messaging, (payload) => {
  console.log('Message received:', payload);
});

console.log(analytics);
