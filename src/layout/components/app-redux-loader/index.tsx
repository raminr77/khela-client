import { LoaderCircleIcon } from 'lucide-react';

export function AppReduxLoader() {
  return (
    <div className='w-full h-dvh fixed top-0 left-0 z-50 bg-white/20 backdrop-blur-sm select-none flex items-center justify-center flex-col gap-4'>
      <LoaderCircleIcon className='animate-spin' />
      <h3>Preparing application data...</h3>
    </div>
  );
}
