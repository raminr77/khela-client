import {
  UserIcon,
  CrownIcon,
  UsersIcon,
  ToiletIcon,
  IceCreamConeIcon
} from 'lucide-react';
import { APP_DATA } from '@/shared/constants/app-data';

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
  friends: '/friends/',
  ranking: '/ranking/',
  hotNews: '/hot-news/',
  settings: '/settings/',
  userProfile: '/user/profile/',
  // Not Found
  notFound: '/not-found/'
} as const;

export const APP_NAVBAR_ROUTES = [
  {
    title: 'Hot News',
    Icon: IceCreamConeIcon,
    url: APP_ROUTES.hotNews
  },
  {
    Icon: UsersIcon,
    title: 'Friends',
    url: APP_ROUTES.friends
  },
  {
    Icon: ToiletIcon,
    title: APP_DATA.name,
    url: APP_ROUTES.main
  },
  {
    Icon: CrownIcon,
    title: 'Ranking',
    url: APP_ROUTES.ranking
  },
  {
    Icon: UserIcon,
    title: 'Profile',
    url: APP_ROUTES.userProfile
  }
] as const;
