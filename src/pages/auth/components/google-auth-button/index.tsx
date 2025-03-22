import { Button } from '@/shared/components/ui/button';

export function GoogleAuthButton() {
  return (
    <div className='my-4 w-full'>
      <Button variant='outline' className='w-full'>
        <img width={18} height={18} src='/images/google.png' alt='Google' />
        Continue With Google
      </Button>
    </div>
  );
}
