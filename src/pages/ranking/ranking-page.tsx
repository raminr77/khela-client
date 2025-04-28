import { animator } from '@/shared/helpers';

import { PlusButton } from '@/pages/friends/components/plus-button';
import { EmptyList } from '@/shared/components/empty-list';
import { SHARE_TYPES } from '@/shared/constants';

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
      <EmptyList
        actionElement={<PlusButton type={SHARE_TYPES.friend} />}
        title='There is no rank yet!'
        actionLabel='Invite Your Friends'
        imageURL='/images/empty-ranking.png'
        message='You can invite your friends!'
      />
    );
  }

  return (
    <div className='flex flex-col gap-4 items-center'>
      <h3 className={animator({ name: 'fadeIn' })}>Khela Land Kingdom!</h3>

      <RankingList data={data} />
    </div>
  );
}
