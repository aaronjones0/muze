'use client';

import HomeView from '@muze/components/HomeView/HomeView';
import useUser from '@muze/hooks/useUser';

export default async function Page() {
  // const user = await useUser(email);
  return <p>Directory</p>;
  // return (!!user &&
  //   <HomeView
  //     email={user.email}
  //     username={user.username}
  //     profileImageUrl={user.profile_image_url}
  //   />
  // );
}
