'use client';

import { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import { signIn, signOut, useSession } from 'next-auth/react';
import LinkButton from '../LinkButton/LinkButton';

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
            <LinkButton label='Sign out' href='/api/auth/signout' />
            <button onClick={() => signOut()}>Sign out</button>
            <p>{session.user?.email}</p>
          </>
        ) : (
          <>
            <LinkButton label='Sign in' href='/api/auth/signin' />
            <button onClick={() => signIn()}>Sign in</button>
          </>
        )}
      </div>
    </>
  );
}
