'use client';

import LinkButton from '@muze/components/LinkButton/LinkButton';
import { signIn, useSession } from 'next-auth/react';
import Image from 'next/image';

export default function Me() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === 'loading') {
    return <p className='animate-pulse'>Processing...</p>;
  }

  return (
    <div className='flex flex-col text-neutral-500'>
      <div className='flex justify-center items-center'>
        {session.user?.image && (
          <div className='rounded-full w-44 h-44 overflow-hidden'>
            <Image
              src={session.user?.image ?? ''}
              alt='Profile Avatar'
              height={192}
              width={192}
              className='rounded-full'
            />
          </div>
        )}
      </div>
      <h1 className='text-4xl font-black'>Profile</h1>
      <p className='font-black'>{session.user?.name}</p>
      <p className='font-light'>{session.user?.email}</p>
      <LinkButton label='Home' href='/' hotkey='h' />
    </div>
  );
}
