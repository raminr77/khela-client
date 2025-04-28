import { EmptyList } from '@/shared/components/empty-list';
import { SHARE_TYPES } from '@/shared/constants';

import { PlusButton } from './components/plus-button';

export function FriendListPage() {
  const friendList = [];

  if (friendList.length === 0) {
    return (
      <EmptyList
        actionElement={<PlusButton type={SHARE_TYPES.friend} />}
        title='There is no friend yet!'
        actionLabel='Invite Your Friends!'
        imageURL='/images/empty-friends.png'
        message='You can send your link to your friends.'
      />
    );
  }

  return (
    <div>
      <h3>Friends</h3>
      <PlusButton isFabButton type={SHARE_TYPES.friend} />
    </div>
  );
}
