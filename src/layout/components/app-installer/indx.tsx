import { ShareIcon, SquarePlusIcon } from 'lucide-react';
import { clsx } from 'clsx';

import { animator, toast } from '@/shared/helpers';
import { APP_DATA } from '@/shared/constants';
import { useState } from 'react';

const STEPS = [
  {
    title: 'Share',
    imageUrl: null,
    Icon: ShareIcon,
    description: 'Press Share in Navigation bar.'
  },
  {
    imageUrl: null,
    Icon: SquarePlusIcon,
    title: 'Add to Home Screen',
    description: 'Scroll down to "Add to Home Screen".'
  },
  {
    Icon: null,
    title: 'Add',
    description: 'Accept our Application and Add it.',
    imageUrl: '/images/maskable-logo.png'
  }
] as const;

type InstallPrompt =
  | (Event & {
      prompt: () => Promise<{ outcome: string }>;
    })
  | null;

export function AppInstaller() {
  const [installPrompt, setInstallPrompt] = useState<InstallPrompt>(null);

  const handleInstallation = async () => {
    if (!installPrompt) {
      return;
    }
    const result = await installPrompt.prompt();
    toast.info({
      message: `Install prompt was: ${result.outcome}`
    });
  };

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    setInstallPrompt(event as InstallPrompt);
  });

  return (
    <div
      onClick={handleInstallation}
      className='w-full h-dvh flex flex-col items-center justify-center gap-14 select-none p-5 relative overflow-hidden'
    >
      <div className='flex flex-col items-center justify-center gap-2'>
        <img
          width={70}
          height={70}
          alt='Khela Logo'
          src={APP_DATA.logo}
          className={animator({ name: 'jackInTheBox' })}
        />
        <h3 className='mt-3 text-amber-600 font-title text-4xl'>{APP_DATA.name + '!'}</h3>
        <p className='text-sm'>{`Add ${APP_DATA.name} Application To Your Phone`}</p>
      </div>

      <div className='flex flex-col justify-center gap-7'>
        {STEPS.map(({ title, description, Icon, imageUrl }, index) => (
          <div
            key={title}
            style={{ animationDelay: `${index * 0.3}s` }}
            className={clsx(
              'flex items-center gap-4 duration-300',
              animator({ name: 'fadeInUp' })
            )}
          >
            <div
              className={clsx('flex items-center justify-center rounded-full w-10 h-10', {
                'overflow-hidden': !!imageUrl,
                'bg-slate-50 border border-slate-300': !imageUrl
              })}
            >
              {imageUrl ? (
                <img src={imageUrl} alt={APP_DATA.name} className='w-full h-full' />
              ) : (
                <Icon size={16} />
              )}
            </div>
            <div className='flex flex-col gap-1'>
              <p className='text-sm'>{title}</p>
              <p className='text-xs'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
