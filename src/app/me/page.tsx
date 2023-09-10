'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import Image from 'next/image';

export default async function Me() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!!error) {
    return <p>Error: {error.message}</p>;
  }

  if (!!user) {
    return (
      <div className='flex flex-col text-neutral-500'>
        <div className='flex justify-center items-center'>
          <div className='rounded-full w-44 h-44 overflow-hidden'>
            <Image
              priority
              src={user.picture ?? ''}
              alt='Profile Avatar'
              height={192}
              width={192}
              className='rounded-full'
            />
          </div>
        </div>
        <h1 className='text-4xl font-black'>Profile</h1>
        <p className='font-black'>{user.name}</p>
        <p className='font-light'>{user.email}</p>
        <LinkButton label='Home' href='/home' hotkey='h' />
      </div>
    );
  }
}
