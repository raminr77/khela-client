import { SparklesIcon } from 'lucide-react';

import { animator } from '@/shared/helpers';

export function AppUserScoresHeader() {
  return (
    <div className='flex items-center gap-1 text-amber-600'>
      <SparklesIcon className={animator({ name: 'jello' })} />
      <span className={animator({ name: 'fadeIn' })}>100</span>
    </div>
  );
}
