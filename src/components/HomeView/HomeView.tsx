'use client';

import { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import { signIn, signOut, useSession } from 'next-auth/react';
import LinkButton from '../LinkButton/LinkButton';
import Image from 'next/image';

export default function HomeView() {
  const [s, setS] = useState('');
  const { data: session } = useSession();

  return (
    <>
      <AppHeader
        commandBarValue={s}
        onCommandChanged={(command) => setS(command)}
      />
      <div>
        {!!session ? (
          <>
            <div className='group cursor-pointer shadow-nh-md rounded-full w-fit mt-4 border-t-2 border-l border-neutral-700'>
              <div className='rounded-full w-fit flex flex-row items-center gap-3 p-3 bg-neutral-900 shadow-ns-md shadow-black'>
                {session.user?.image && (
                  <Image
                    src={session.user?.image ?? ''}
                    alt='Profile Avatar'
                    height={40}
                    width={40}
                    className='rounded-full shadow-sm shadow-black opacity-90 group-hover:opacity-100 transition-opacity'
                  />
                )}
                <div className='rounded-full flex flex-col group-hover:text-neutral-400 transition-colors'>
                  <p className='font-black leading-5'>{session.user?.name}</p>
                  <p className='font-light leading-5 max-w-[120px] overflow-hidden text-ellipsis'>{session.user?.email}</p>
                </div>
              </div>
            </div>
            <LinkButton label='Sign out' href='/api/auth/signout' />
          </>
        ) : (
          <>
            <LinkButton label='Sign in' href='/api/auth/signin' />
          </>
        )}
      </div>
    </>
  );
}
