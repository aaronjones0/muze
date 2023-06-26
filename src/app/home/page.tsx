'use client';

import ProcessingIndicator from '@muze/components/ProcessingIndicator/ProcessingIndicator';
import useRequiredSession from '@muze/hooks/useRequiredSession';
import { sanity } from '@muze/lib/sanity-client';
import { User } from '@muze/model/User';
import Link from 'next/link';

export default async function Page() {
  const { session, status } = useRequiredSession();

  if (status === 'loading') {
    return <ProcessingIndicator text='Processing' />;
  }

  if (status === 'authenticated') {
    if (!!session) {
      const user = await getUser(session.user?.email ?? '');

      if (!!user) {
        return (
          <>
            <ul>
              <li>{user?._id}</li>
              <li>{user?.email}</li>
              <li>{user?.username}</li>
              <li>{user?.full_name}</li>
            </ul>
          </>
        );
      }

      return (
        <>
          <p className='text-neutral-50'>Sign up? (Existing session.)</p>
          <Link
            href={{
              pathname: '/sign-up',
              query: {
                email: session.user?.email,
                username: session.user?.name,
              },
            }}
          >
            Sign up
          </Link>
          <Link href='/api/auth/signout'>Sign out</Link>
        </>
      );
    }

    return <p className='text-neutral-50'>Sign up? (No session.)</p>;
  }

  return <p className='text-neutral-50'>Unauthenticated</p>;
}

async function getUser(email: string): Promise<User | undefined> {
  const users = await sanity.fetch(`*[_type == "user" && email == "${email}"]`);

  if (!!users) {
    return users[0];
  } else {
    return users;
  }
}
