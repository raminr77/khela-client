import { Button } from '@/shared/components/ui/button.tsx';
import { animator } from '@/shared/helpers';
import { PlusIcon } from 'lucide-react';
import { clsx } from 'clsx';

export function PlusButton() {
  return (
    <Button
      className={clsx(
        'fixed right-5 bottom-24 rounded-full w-14 h-14',
        animator({ name: 'jackInTheBox' })
      )}
    >
      <PlusIcon />
    </Button>
  );
}
