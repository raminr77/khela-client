import { clsx } from 'clsx';

import { animator } from '@/shared/helpers';

export function ShareContent() {
  return (
    <div
      className={clsx('w-full px-5 py-2 overflow-hidden', animator({ name: 'fadeIn' }))}
    >
      <h3>Share ?</h3>
    </div>
  );
}
