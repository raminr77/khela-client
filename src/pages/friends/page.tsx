import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

import { FriendListPage } from './friend-list-page.tsx';
import { GroupListPage } from './group-list-page.tsx';

export function FriendsPage() {
  return (
    <Tabs defaultValue='friends' className='w-full'>
      <TabsList className='grid w-full grid-cols-2 h-fit mb-2'>
        <TabsTrigger className='py-2' value='friends'>
          Friends
        </TabsTrigger>
        <TabsTrigger className='py-2' value='groups'>
          Groups
        </TabsTrigger>
      </TabsList>
      <TabsContent value='friends'>
        <FriendListPage />
      </TabsContent>
      <TabsContent value='groups'>
        <GroupListPage />
      </TabsContent>
    </Tabs>
  );
}
