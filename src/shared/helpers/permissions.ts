import { toast } from '@/shared/helpers/toast.ts';

export const getNotificationPermission = () => {
  return new Promise(function (resolve, reject) {
    const permissionResult = Notification.requestPermission((result) => resolve(result));

    if (permissionResult) {
      permissionResult.then(resolve, reject);
    }
  }).then(function (permissionResult) {
    if (permissionResult !== 'granted') {
      toast.error({ message: 'We need permission to send notification. 🥹' });
      throw new Error("We weren't granted permission.");
    }
  });
};
