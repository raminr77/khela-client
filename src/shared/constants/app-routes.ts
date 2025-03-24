export const APP_ROUTES = {
  landing: '/',
  // Auth
  login: '/auth/login/',
  register: '/auth/register/',
  resetPassword: '/auth/reset-password/',
  recoverPassword: '/auth/recover-password/',
  // App
  main: '/main/',
  terms: '/terms/',
  // Not Found
  notFound: '/not-found/'
} as const;
