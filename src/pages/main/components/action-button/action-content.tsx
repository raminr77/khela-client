import { useState, type ChangeEvent } from 'react';
import { clsx } from 'clsx';

import { animator, generateRandomCurvePath } from '@/shared/helpers';
import { Slider } from '@/shared/components/ui/slider';

const TYPES = [
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
];

export function ActionContent() {
  const [size, setSize] = useState<number[]>([0]);
  const [selectedType, setSelectedType] = useState<string>(TYPES[0].value);

  const handleChangeType = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedType(event.target.value);
    setSize([0]);
  };

  const handleChangeSize = (value: number[]) => {
    setSize(value);
  };

  const svgPath = generateRandomCurvePath(1);

  return (
    <div className='w-full px-5 py-2 overflow-hidden'>
      <div className='flex items-center justify-center gap-4 w-full'>
        {TYPES.map(({ id, title, value, image }) => (
          <div
            key={id}
            className={clsx(
              'flex items-center justify-center gap-1 flex-col text-xs',
              animator({ name: 'jackInTheBox' })
            )}
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
                'w-18 h-18 rounded flex items-center justify-center rounded-md border-3 grayscale peer-checked:grayscale-0 duration-300 relative overflow-hidden bg-slate-50',
                {
                  'peer-checked:border-yellow-500': value === TYPES[0].value,
                  'peer-checked:border-amber-900': value === TYPES[1].value
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
                  className={clsx('absolute bottom-0 left-0 right-0 duration-100 z-10', {
                    'bg-yellow-400': value === TYPES[0].value,
                    'bg-amber-900': value === TYPES[1].value
                  })}
                  style={{ height: `${(66 * size[0]) / 100}px` }}
                >
                  <svg
                    className='-top-3 absolute'
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 1440 320'
                  >
                    <path
                      fill={value === TYPES[0].value ? '#fdc700' : '#7b3306'}
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
        className={clsx(
          'w-full mt-2 flex flex-col gap-4',
          animator({ name: 'fadeInUp' })
        )}
      >
        <p>Size</p>
        <div className='flex items-center gap-4'>
          <Slider value={size} max={100} step={1} onValueChange={handleChangeSize} />
          <span>{size}</span>
        </div>
      </div>
    </div>
  );
}
