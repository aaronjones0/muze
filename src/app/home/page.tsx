'use client';

import HomeView from '@muze/components/HomeView/HomeView';
import ProcessingIndicator from '@muze/components/ProcessingIndicator/ProcessingIndicator';
import UserSignupForm from '@muze/components/UserSignupForm/UserSignupForm';
import { sanity } from '@muze/lib/sanity-client';
import { User } from '@muze/model/User';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default async function Page() {
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  if (status === 'loading') {
    return <ProcessingIndicator text='Processing' />;
  }

  if (status === 'authenticated') {
    if (!!session) {
      const user = await getUser(session.user?.email ?? '');

      if (!!user) {
        return (
          <>
            <HomeView
              email={user.email}
              username={user.username}
              profileImageUrl={user.profile_image_url}
            />
            {/* <ul>
              <li>{user?._id}</li>
              <li>{user?.email}</li>
              <li>{user?.username}</li>
              <li>{user?.full_name}</li>
            </ul> */}
          </>
        );
      }

      return (
        <>
          <p className='text-neutral-50'>Sign up? (Existing session.)</p>
          <UserSignupForm
            email={session.user?.email ?? ''}
            username={session.user?.name ?? ''}
          />
          <Link href='/api/auth/signout'>Sign out</Link>
        </>
      );
    }

    return <p className='text-neutral-50'>Sign up? (No session.)</p>;
  }

  return <p className='text-neutral-50'>Unauthenticated</p>;
}

async function getUser(email: string): Promise<User | undefined> {
  const users = await sanity.fetch(`*[_type == "user" && email == "${email}"]{
    _id,
    _type,
    full_name,
    first_name,
    middle_name,
    last_name,
    username,
    email,
    "profile_image_url": profile_image.asset->url
  }`);

  if (!!users) {
    return users[0];
  } else {
    return users;
  }
}
