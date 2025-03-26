import { APP_NAVBAR_ROUTES } from '@/shared/constants';

export const getNavbarMenuIndex = (pathname: string): number => {
  return APP_NAVBAR_ROUTES.findIndex(({ url }) => url.match(pathname));
};
