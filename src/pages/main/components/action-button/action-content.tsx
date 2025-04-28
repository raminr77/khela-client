import { useState, type ChangeEvent, useMemo } from 'react';
import { clsx } from 'clsx';

import { animator, generateRandomCurvePath } from '@/shared/helpers';
import { Textarea } from '@/shared/components/ui/textarea';
import { Slider } from '@/shared/components/ui/slider';
import { Label } from '@/shared/components/ui/label';

const TYPES = {
  pee: 'PEE',
  poop: 'POOP'
} as const;

const TYPE_OPTIONS = [
  {
    id: 1,
    title: 'Pee',
    value: 'PEE',
    image: '/images/pee.png'
  },
  {
    id: 2,
    title: 'Poop',
    value: 'POOP',
    image: '/images/poop.png'
  }
] as const;

export function ActionContent() {
  const [size, setSize] = useState<number[]>([10]);
  const [selectedType, setSelectedType] = useState<string>(TYPES.pee);

  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
    setSize([10]);
  };

  const handleChangeSize = (value: number[]) => {
    setSize(value);
  };

  const svgPath = useMemo(() => generateRandomCurvePath(1), [size]);

  return (
    <div className='w-full px-5 py-2 overflow-y-auto'>
      <div className='flex items-center justify-center gap-4 w-full'>
        {TYPE_OPTIONS.map(({ id, title, value, image }) => (
          <div
            key={id}
            className='flex items-center justify-center gap-1 flex-col text-xs'
          >
            <input
              type='radio'
              name='type'
              value={value}
              id={`type-${title}`}
              className='hidden peer'
              onChange={handleChangeType}
              checked={selectedType === value}
            />
            <label
              htmlFor={`type-${title}`}
              className={clsx(
                'w-18 h-18 rounded-md flex items-center justify-center border-3 grayscale peer-checked:grayscale-0 duration-300 relative overflow-hidden bg-slate-50',
                {
                  'peer-checked:border-yellow-500': value === TYPES.pee,
                  'peer-checked:border-amber-900': value === TYPES.poop
                }
              )}
            >
              <img
                width={32}
                height={32}
                alt={title}
                src={image}
                loading='lazy'
                className='absolute z-20'
              />
              {selectedType === value && (
                <div
                  className={clsx(
                    'absolute bottom-0 left-0 right-0 duration-500 z-10 opacity-30',
                    {
                      'bg-yellow-400': value === TYPES.pee,
                      'bg-amber-800': value === TYPES.poop
                    }
                  )}
                  style={{
                    height: `${(66 * size[0]) / 100}px`
                  }}
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='absolute -top-3'
                    viewBox='0 0 1440 320'
                  >
                    <path
                      fill={value === TYPES.pee ? '#fdc700' : '#7b3306'}
                      className='duration-500'
                      fillOpacity='1'
                      d={svgPath}
                    />
                  </svg>
                </div>
              )}
            </label>
            <span>{title}</span>
          </div>
        ))}
      </div>

      <div
        className={clsx('w-full mt-2 flex flex-col gap-4', animator({ name: 'fadeIn' }))}
      >
        <Label htmlFor='action-size'>Size</Label>
        <div className='flex items-center gap-4 w-full'>
          <Slider
            id='action-size'
            value={size}
            max={100}
            step={1}
            onValueChange={handleChangeSize}
          />
          <span className='whitespace-nowrap'>{`${size[0] * 20} ${selectedType === TYPES.pee ? 'ml' : 'g'}`}</span>
        </div>

        <Label htmlFor='action-note'>
          Note <span className='text-sm text-slate-400'>( Optional )</span>
        </Label>
        <Textarea id='action-note' rows={2} />
      </div>
    </div>
  );
}
