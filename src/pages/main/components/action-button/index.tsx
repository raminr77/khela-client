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
import { useState } from 'react';

import { ActionContent } from './action-content';
import { ShareContent } from './share-content';

export function ActionButton() {
  const [showShareMenu, setShowShareMenu] = useState<boolean>(false);

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
          <DrawerDescription>
            {showShareMenu
              ? 'Do you want to share it with friends ?'
              : 'Add your toilet story...'}
          </DrawerDescription>
        </DrawerHeader>

        {showShareMenu ? <ShareContent /> : <ActionContent />}

        <DrawerFooter className='mb-3'>
          {showShareMenu ? (
            <>
              <Button size='lg'>Submit</Button>
              <Button variant='outline' size='lg' onClick={() => setShowShareMenu(false)}>
                Back
              </Button>
            </>
          ) : (
            <>
              <Button size='lg' onClick={() => setShowShareMenu(true)}>
                Next
              </Button>
              <DrawerClose className='mt-1' asChild>
                <Button variant='outline' size='lg'>
                  Cancel
                </Button>
              </DrawerClose>
            </>
          )}
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
