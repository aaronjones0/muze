'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import HomeView from '@muze/components/HomeView/HomeView';

export default async function Page() {
  const { user, error, isLoading } = useUser();

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (!!error) {
    return (
      <div>
        <h1>:(</h1>
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (!!user) {
    return (
      <HomeView
        email={user.email ?? ''}
        username={user.nickname ?? ''}
        profileImageUrl={user.picture ?? ''}
      />
    );
  }
}
