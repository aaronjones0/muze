'use client';

import Image from 'next/image';
import HeroButton from '../HeroButton/HeroButton';
import { useUser } from '@auth0/nextjs-auth0/client';

export default async function FrontDoor() {
  const { user, error, isLoading } = useUser();
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-16'>
        <h1 className='text-[100px] font-black text-neutral-900 drop-shadow-[0_4px_6px_-1px_rgb(245,158,11)]'>
          Muze
        </h1>
        <Image
          priority
          src='/MuzeTextLogo_v2.png'
          alt='Muze Logo'
          height={484}
          width={963}
          className='h-min w-min'
        />
        <HeroButton label='Enter' href='/home' />
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error.</p>
        ) : user ? (
          <>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.nickname}</p>
            <p>Email verified: {user.email_verified}</p>
            <a href='/api/auth/logout'>Sign out</a>
          </>
        ) : (
          <a href='/api/auth/login'>Sign in</a>
        )}
      </div>
    </>
  );
}
