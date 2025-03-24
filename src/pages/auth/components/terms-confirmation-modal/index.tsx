import { InfoIcon } from 'lucide-react';

import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogCancel,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogDescription
} from '@/shared/components/ui/alert-dialog';
import { TermsContent } from '@/shared/components/terms-content';

export function TermsConfirmationModal() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild className='inline-block'>
        <InfoIcon className='text-amber-600 size-5' />
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Terms and Conditions for Khela!</AlertDialogTitle>
          <AlertDialogDescription className='mt-4 overflow-y-scroll max-h-[400px]'>
            <TermsContent />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Continue</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
