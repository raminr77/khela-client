import {
  Drawer,
  DrawerClose,
  DrawerTitle,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerTrigger,
  DrawerDescription
} from '@/shared/components/ui/drawer';
import { Button } from '@/shared/components/ui/button';
import { ActionContent } from './action-content';

export function ActionButton() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className='w-full' size='lg'>
          Add New Story
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>New Shit!</DrawerTitle>
          <DrawerDescription>Add your toilet story...</DrawerDescription>
        </DrawerHeader>

        <ActionContent />

        <DrawerFooter>
          <Button size='lg'>Submit</Button>
          <DrawerClose className='mt-1' asChild>
            <Button variant='outline' size='lg'>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
