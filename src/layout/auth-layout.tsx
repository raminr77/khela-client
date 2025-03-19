import { Outlet } from 'react-router';

export function AuthLayout() {
  return (
    <div className='w-full h-dvh flex items-center justify-center'>
      <Outlet />
    </div>
  );
}
