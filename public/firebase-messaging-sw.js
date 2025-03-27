/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.9.0/firebase-messaging-compat.js');

firebase.initializeApp({
  appId: "YOUR_APP_ID",
  apiKey: "YOUR_API_KEY",
  projectId: "YOUR_PROJECT_ID",
  authDomain: "YOUR_AUTH_DOMAIN",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    icon: './images/favicon.png',
    body: payload.notification.body,
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});
