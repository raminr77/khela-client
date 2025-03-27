import {
  onMessage,
  getMessaging,
  getToken as getMessagingToken
} from 'firebase/messaging';
import { initializeApp } from 'firebase/app';

import { FIREBASE_CONFIGS } from '@/shared/constants';
import { toast } from '@/shared/helpers';

const FIREBASE_APP = initializeApp(FIREBASE_CONFIGS);
const FIREBASE_MESSAGING = getMessaging(FIREBASE_APP);

export async function requestNotificationPermission() {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      const token = await getMessagingToken(FIREBASE_MESSAGING, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
      });
      console.log('- FCM Token:', token);
      return token;
    }
  } catch (error) {
    console.error('Error getting notification permission:', error);
    toast.error({ message: 'We need permission to send notification. 🥹' });
  }
}

export function onMessageListener() {
  return new Promise((resolve) => {
    onMessage(FIREBASE_MESSAGING, (payload) => {
      resolve(payload);
    });
  });
}
