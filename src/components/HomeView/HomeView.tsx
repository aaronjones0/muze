'use client';

import { useSession } from 'next-auth/react';
import { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';
import LinkButton from '../LinkButton/LinkButton';
import ProfileBadge from '../ProfileBadge/ProfileBadge';

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
            <ProfileBadge session={session} />
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
