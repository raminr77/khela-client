import { useState } from 'react';

import { Button } from '@/shared/components/ui/button';

export function UserProfilePage() {
  const [status, setStatus] = useState<string>('Unauthorized.');

  const handleAuthenticate = () => {
    navigator.credentials
      .create({
        publicKey: {
          challenge: new Uint8Array([117, 61, 252, 231, 191, 241]),
          rp: { id: 'raminrezaei.se', name: "Ramin's Personal Website" },
          user: {
            id: new Uint8Array([79, 252, 83, 72, 214, 7, 89, 26]),
            name: 'Ramin',
            displayName: 'Ramin'
          },
          pubKeyCredParams: [{ type: 'public-key', alg: -7 }]
        }
      })
      .then((pubKeyCredential) => {
        setStatus(JSON.stringify(pubKeyCredential, null, 2));
      })
      .catch((error) => {
        setStatus(`Error: Unauthorized, ${error.message}`);
      });
  };

  return (
    <div className='flex items-center justify-center w-full flex-col gap-5 min-h-80'>
      <h3 className='flex items-center justify-center text-sm w-full'>{status}</h3>
      <Button onClick={handleAuthenticate}>Authenticate With Your Device</Button>
      <br />
      <p className='text-md'>The Web Authentication API ( WebAuthn )</p>
    </div>
  );
}
