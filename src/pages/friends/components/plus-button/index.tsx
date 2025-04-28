import { PlusIcon } from 'lucide-react';
import { clsx } from 'clsx';

import {
  Dialog,
  DialogTitle,
  DialogHeader,
  DialogContent,
  DialogTrigger
} from '@/shared/components/ui/dialog';
import { Button } from '@/shared/components/ui/button.tsx';
import { SHARE_TYPES } from '@/shared/constants';
import type { ShareType } from '@/shared/types';
import { animator } from '@/shared/helpers';

import { InviteFriend } from '../invite-friend';
import { CreateGroup } from '../create-group';

interface PlusButtonProps {
  type: ShareType;
  isFabButton?: boolean;
}

export function PlusButton({ type, isFabButton = false }: PlusButtonProps) {
  const buttonText =
    type === SHARE_TYPES.friend ? 'Invite Your Friends' : 'Create New Group';

  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className={clsx({
            'fixed right-5 bottom-24 rounded-full w-14 h-14': isFabButton,
            [animator({ name: 'jackInTheBox' })]: isFabButton
          })}
        >
          {isFabButton ? <PlusIcon /> : buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            {type === SHARE_TYPES.friend ? 'Invite Your Friends' : 'Create New Group'}
          </DialogTitle>
        </DialogHeader>
        {type === SHARE_TYPES.friend ? <InviteFriend /> : <CreateGroup />}
      </DialogContent>
    </Dialog>
  );
}
