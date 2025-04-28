import type { ReactNode } from 'react';
import { Link } from 'react-router';

import { Button } from '@/shared/components/ui/button';
import { animator } from '@/shared/helpers';

interface EmptyListProps {
  title: string;
  message: string;
  imageURL: string;
  actionURL?: string;
  actionLabel: string;
  actionElement?: ReactNode;
}

export function EmptyList({
  title,
  message,
  imageURL,
  actionURL,
  actionLabel,
  actionElement
}: EmptyListProps) {
  return (
    <div className='w-full flex items-center justify-center p-5 flex-col text-center gap-3'>
      <img
        width={128}
        height={128}
        loading='lazy'
        src={imageURL}
        alt='Empty List'
        className={animator({ name: 'jackInTheBox' })}
      />
      <h3 className='mt-5 text-lg text-amber-600'>{title}</h3>
      <p className='text-sm mb-4'>{message}</p>
      {actionURL && (
        <Button>
          <Link to={actionURL}>{actionLabel}</Link>
        </Button>
      )}
      {actionElement && actionElement}
    </div>
  );
}
