import { useState, type ChangeEvent } from 'react';
import { clsx } from 'clsx';

import { Input } from '@/shared/components/ui/input';
import { animator } from '@/shared/helpers';

type ListItem = {
  id: number;
  name: string;
  image: string;
  type: 'GROUP' | 'FRIEND';
};

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

  const list: ListItem[] = [
    { id: 1, type: 'GROUP', name: 'Us Group', image: '' },
    { id: 2, type: 'GROUP', name: 'School Group', image: '' },
    { id: 3, type: 'FRIEND', name: 'Jack', image: '' },
    { id: 4, type: 'FRIEND', name: 'Anna', image: '' },
    { id: 5, type: 'FRIEND', name: 'Ali', image: '' },
    { id: 6, type: 'FRIEND', name: 'Ramin', image: '' },
    { id: 7, type: 'FRIEND', name: 'Janny', image: '' },
    { id: 8, type: 'FRIEND', name: 'Mary', image: '' },
    { id: 9, type: 'FRIEND', name: 'Mary', image: '' },
    { id: 10, type: 'FRIEND', name: 'Mary', image: '' },
    { id: 11, type: 'FRIEND', name: 'Mary', image: '' },
    { id: 12, type: 'FRIEND', name: 'Mary', image: '' }
  ];

  return (
    <div
      className={clsx(
        'w-full px-5 pb-4 pt-12 flex flex-col gap-4 h-72 overflow-y-auto',
        animator({ name: 'fadeIn' })
      )}
    >
      <div className='fixed z-10 top-2 left-0 bg-white w-full px-5 py-2'>
        <Input
          placeholder='Search ...'
          value={filterText}
          onChange={handleSearchChange}
        />
      </div>
      <div className='flex flex-wrap gap-6'>
        {list.filter(handleFilterList).map(({ id, name, image }, index) => (
          <div key={id} className='flex items-center justify-center gap-2 flex-col'>
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
                'border-2 duration-300 p-1 w-16 h-16 bg-slate-100 cursor-pointer relative flex items-center justify-center rounded-full',
                {
                  'border-primary': selectedItems.includes(index),
                  'border-transparent': !selectedItems.includes(index)
                }
              )}
            >
              {image ? (
                <img src={image} alt={name} />
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
