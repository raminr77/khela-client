import { animator } from '@/shared/helpers';
import { clsx } from 'clsx';

import { APP_ROUTES } from '@/shared/constants';
import type { RankItemData } from '../../types';
import { Link } from 'react-router';

interface RankingListItemProps {
  data: RankItemData;
  index: number;
}

const CUSTOM_STYLES: Record<number, string> = {
  1: 'border-amber-400 mb-1',
  2: 'border-slate-300 mb-1',
  3: 'border-slate-300 mb-3'
};

const NICKNAMES: Record<number, { title: string; image: string }> = {
  1: { title: 'King Of Khela!', image: '/images/badges/17.png' },
  2: { title: 'President Of Khela!', image: '/images/badges/16.png' },
  3: { title: 'Minister Of Khela!', image: '/images/badges/15.png' },
  4: { title: 'General', image: '/images/badges/14.png' },
  5: { title: 'General ||', image: '/images/badges/13.png' },
  6: { title: 'Colonel', image: '/images/badges/12.png' },
  7: { title: 'Colonel ||', image: '/images/badges/11.png' },
  8: { title: 'Captain', image: '/images/badges/10.png' },
  9: { title: 'Captain ||', image: '/images/badges/09.png' },
  10: { title: 'Commander |V', image: '/images/badges/08.png' },
  11: { title: 'Commander |||', image: '/images/badges/07.png' },
  12: { title: 'Commander ||', image: '/images/badges/06.png' },
  13: { title: 'Commander |', image: '/images/badges/05.png' },
  14: { title: 'Soldier |V', image: '/images/badges/04.png' },
  15: { title: 'Soldier |||', image: '/images/badges/03.png' },
  16: { title: 'Soldier ||', image: '/images/badges/02.png' },
  17: { title: 'Soldier |', image: '/images/badges/01.png' }
};

export function RankingListItem({ data, index = 0 }: RankingListItemProps) {
  const order: number = index + 1;
  const { id, name, pee, poop, score } = data;
  return (
    <li
      className={animator({ name: 'fadeIn' })}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <Link
        to={`${APP_ROUTES.user}${id}/`}
        className={clsx(
          'flex items-center border py-2 rounded bg-white px-4 gap-4',
          CUSTOM_STYLES[order]
        )}
      >
        <img
          width={36}
          alt='Badge'
          height={36}
          loading='lazy'
          style={{ animationDelay: `${index * 0.3}s` }}
          className={animator({ name: 'jackInTheBox' })}
          src={NICKNAMES[order] ? NICKNAMES[order].image : '/images/badges/people.png'}
        />

        <div className='w-full flex items-center flex-col gap-2'>
          <div className='flex items-center justify-between w-full font-bold'>
            <p>{name}</p>
            <div className='flex items-center gap-1'>
              <img
                width={16}
                alt='Score'
                height={16}
                loading='lazy'
                src='/images/star.png'
              />
              <span className='text-sm text-amber-600'>{score}</span>
            </div>
          </div>

          <div className='flex items-center justify-between w-full text-sm'>
            <div className='flex items-center gap-2 flex-wrap'>
              <span className='text-sm'>{`Rank: ${order}`}</span>
              <p className='text-slate-500'>
                {NICKNAMES[order] ? `( ${NICKNAMES[order].title} )` : 'Laborers'}
              </p>
            </div>
            <div className='flex items-center gap-2 text-xs'>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-amber-300' />
                <span>{pee}</span>
              </div>
              <div className='flex items-center gap-2'>
                <span className='w-2 h-2 rounded-full bg-amber-800' />
                <span>{poop}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
}
