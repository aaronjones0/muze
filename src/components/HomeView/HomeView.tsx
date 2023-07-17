'use client';

import AppHeader from '../AppHeader/AppHeader';
import Card from '../Card/Card';
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
          <div className='flex flex-col gap-5'>
            <Card description='Episodic narratives for the small screen.' title={`TV Series'`} href='/tv-series' />
            <Card description='Japanese graphic novels.' title={`Manga`} href='/manga' />
            <Card description='Any non-graphical written work. Exceptions: Newspaper, magazine issue, cooking recipe.' title={`Books`} href='/books' />
          </div>
        </>
      </div>
    </>
  );
}
