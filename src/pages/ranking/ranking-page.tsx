import { animator } from '@/shared/helpers';
import { Link } from 'react-router';

import { Button } from '@/shared/components/ui/button';
import { APP_ROUTES } from '@/shared/constants';

import { RankingList } from './components/ranking-list';
import type { RankItemData } from './types';

export function RankingPage() {
  const data: RankItemData[] = [
    { id: 1, name: 'Jessica', pee: 40, poop: 12, score: 120 },
    { id: 2, name: 'Johanna', pee: 23, poop: 8, score: 101 },
    { id: 3, name: 'Amanda', pee: 10, poop: 3, score: 84 },
    { id: 4, name: 'David', pee: 9, poop: 1, score: 50 },
    { id: 5, name: 'Ramin', pee: 3, poop: 0, score: 22 },
    { id: 6, name: 'Tom', pee: 1, poop: 0, score: 10 },
    { id: 7, name: 'Tommy', pee: 1, poop: 0, score: 10 },
    { id: 8, name: 'Taylor', pee: 1, poop: 0, score: 10 },
    { id: 9, name: 'Jack', pee: 1, poop: 0, score: 10 }
  ];

  if (data.length === 0) {
    return (
      <div className='w-full flex items-center justify-center p-5 flex-col text-center gap-3'>
        <img
          width={128}
          height={128}
          loading='lazy'
          alt='Empty List'
          src='/images/empty-ranking.png'
          className={animator({ name: 'fadeInLeft' })}
        />
        <h3 className='mt-5 text-lg text-amber-600'>There is no rank yet!</h3>
        <p className='text-sm mb-4'>You can invite your friends!</p>
        <Button>
          <Link to={APP_ROUTES.friends}>Invite Your Friends</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h3 className={animator({ name: 'fadeIn' })}>Khela Land Kingdom!</h3>

      <RankingList data={data} />
    </div>
  );
}
