import { EmptyList } from '@/shared/components/empty-list';
import { SHARE_TYPES } from '@/shared/constants';

import { PlusButton } from './components/plus-button';

export function GroupListPage() {
  const groupList = [];

  if (groupList.length === 0) {
    return (
      <EmptyList
        actionElement={<PlusButton type={SHARE_TYPES.group} />}
        title='There is no Group yet!'
        actionLabel='Create New Group!'
        imageURL='/images/empty-group.png'
        message='Add your friend to a group.'
      />
    );
  }

  return (
    <div>
      <h3>Groups</h3>
      <PlusButton isFabButton type={SHARE_TYPES.group} />
    </div>
  );
}
