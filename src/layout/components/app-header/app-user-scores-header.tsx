import { animator } from '@/shared/helpers';

export function AppUserScoresHeader() {
  return (
    <div className='flex items-center gap-1 text-amber-600'>
      <img
        width={20}
        alt='Score'
        height={20}
        loading='lazy'
        src='/images/star.png'
        className={animator({ name: 'jello' })}
      />
      <span className={animator({ name: 'fadeIn' })}>100</span>
    </div>
  );
}
