import { useState, type ChangeEvent } from 'react';
import { clsx } from 'clsx';

import { Input } from '@/shared/components/ui/input';
import { animator } from '@/shared/helpers';

type ListItem = {
  id: number;
  name: string;
  image: string | null;
  type: 'GROUP' | 'FRIEND';
};

const list: ListItem[] = [
  { id: 1, type: 'GROUP', name: 'Us Group', image: null },
  { id: 2, type: 'GROUP', name: 'School Group', image: null },
  { id: 3, type: 'FRIEND', name: 'Jack', image: null },
  { id: 4, type: 'FRIEND', name: 'Anna', image: null },
  { id: 5, type: 'FRIEND', name: 'Ali', image: null },
  { id: 6, type: 'FRIEND', name: 'Ramin', image: null },
  { id: 7, type: 'FRIEND', name: 'Janny', image: null },
  { id: 8, type: 'FRIEND', name: 'Mary', image: null },
  { id: 9, type: 'FRIEND', name: 'Mary', image: null },
  { id: 10, type: 'FRIEND', name: 'Mary', image: null },
  { id: 11, type: 'FRIEND', name: 'Mary', image: null },
  { id: 12, type: 'FRIEND', name: 'Mary', image: null }
];

export function ShareContent() {
  const [filterText, setFilterText] = useState<string>('');
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleChangeSelect = (event: ChangeEvent<HTMLInputElement>) => {
    const value = +event.target.value;
    const checked = event.target.checked;
    const list = selectedItems.filter((item) => item !== value);

    if (checked) {
      list.push(value);
    }
    setSelectedItems(list);
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setFilterText(value);
  };

  const handleFilterList = ({ name }: ListItem) =>
    name.toLowerCase().match(filterText.toLowerCase());

  return (
    <div
      className={clsx(
        'w-full px-5 py-2 flex flex-col gap-4',
        animator({ name: 'fadeIn' })
      )}
    >
      <Input value={filterText} placeholder='Search ...' onChange={handleSearchChange} />
      <div className='grid grid-cols-4 justify-center overflow-y-auto gap-6 max-h-64'>
        {list.filter(handleFilterList).map(({ id, name, image }, index) => (
          <div key={id} className='flex items-center justify-center gap-1 flex-col'>
            <input
              name='type'
              value={index}
              type='checkbox'
              id={`share-to-${index}`}
              className='hidden peer'
              onChange={handleChangeSelect}
              checked={selectedItems.includes(index)}
            />
            <label
              htmlFor={`share-to-${index}`}
              className={clsx(
                'border-2 overflow-hidden duration-300 w-16 h-16 bg-slate-100 cursor-pointer relative flex items-center justify-center rounded-full',
                {
                  'border-primary': selectedItems.includes(index),
                  'border-transparent': !selectedItems.includes(index)
                }
              )}
            >
              {image ? (
                <img className='w-full h-full' src={image} alt={name} />
              ) : (
                name.substring(0, 2).toUpperCase()
              )}
            </label>
            <span className='text-xs truncate'>{name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
