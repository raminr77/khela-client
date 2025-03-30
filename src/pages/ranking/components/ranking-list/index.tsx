import { RankingListItem } from './ranking-list-item';
import type { RankItemData } from '../../types';

interface RankingListProps {
  data: RankItemData[];
}

export function RankingList({ data = [] }: RankingListProps) {
  return (
    <ul className='flex flex-col gap-2 w-full'>
      {data.map((item: RankItemData, index: number) => (
        <RankingListItem key={item.id} index={index} data={item} />
      ))}
    </ul>
  );
}
