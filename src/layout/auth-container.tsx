import { APP_ROUTES } from '@/shared/constants';
import { Navigate } from 'react-router';

interface AuthContainerProps {
  isPrivate: boolean;
  children: React.ReactNode;
}

export function AuthContainer({ isPrivate, children }: AuthContainerProps) {
  if (isPrivate) {
    return <Navigate to={APP_ROUTES.login} replace />;
  }

  return children;
}
