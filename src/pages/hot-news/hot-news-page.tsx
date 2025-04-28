import { ActionButton } from '@/pages/main/components/action-button';
import { EmptyList } from '@/shared/components/empty-list';

export function HotNewsPage() {
  const newsList = [];

  if (newsList.length === 0) {
    return (
      <EmptyList
        title='There is no news yet!'
        actionElement={<ActionButton />}
        imageURL='/images/empty-news.png'
        actionLabel='Add New Toilet Story'
        message='You can send a story to your friend.'
      />
    );
  }

  return (
    <div>
      <h3>Hot News</h3>
    </div>
  );
}
