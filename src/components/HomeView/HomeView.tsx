'use client';

import AppHeader from '../AppHeader/AppHeader';
import LinkButton from '../LinkButton/LinkButton';
import ProfileBadge from '../ProfileBadge/ProfileBadge';

export default async function HomeView({
  username,
  email,
  profileImageUrl,
}: {
  username: string;
  email: string;
  profileImageUrl: string;
}) {
  // const [s, setS] = useState('');

  return (
    <>
      <AppHeader
        // commandBarValue={s}
        // onCommandChanged={(command) => setS(command ?? '')}
      />
      <div>
        <>
          <ProfileBadge
            username={username}
            email={email}
            profileImageUrl={profileImageUrl}
          />
          <LinkButton label='Sign out' href='/api/auth/signout' />
        </>
      </div>
    </>
  );
}
