'use client';

import HomeView from '@muze/components/HomeView/HomeView';
import ProcessingIndicator from '@muze/components/ProcessingIndicator/ProcessingIndicator';
import UserSignupForm from '@muze/components/UserSignupForm/UserSignupForm';
import { signedIn, signedOut } from '@muze/lib/redux/slices/userSlice';
import store, { userSelector } from '@muze/lib/redux/store';
import { sanity } from '@muze/lib/sanity-client';
import { User } from '@muze/model/User';
import { signIn, useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

export default async function Page() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  useEffect(() => {
    if (status === 'authenticated' && !!session) {
      getUser(session.user?.email ?? '').then((user) => {
        if (!!user) {
          dispatch(signedIn(user));
        } else {
          dispatch(signedOut());
        }
      });
    }
  }, [status, session, dispatch]);

  return (
    <Provider store={store}>
      {status === 'loading' && <ProcessingIndicator text='Processing' />}
      {status === 'authenticated' && !!session && !!user && (
        <HomeView
          email={user.email}
          username={user.username}
          profileImageUrl={user.profile_image_url}
        />
      )}
    </Provider>
  );

  // if (status === 'loading') {
  //   return <ProcessingIndicator text='Processing' />;
  // }

  // if (status === 'authenticated') {
  //   if (!!session) {
  //     const user = await getUser(session.user?.email ?? '');

  //     if (!!user) {
  //       dispatch(signedIn(user));

  //       return (
  //         <>
  //           <HomeView
  //             email={user.email}
  //             username={user.username}
  //             profileImageUrl={user.profile_image_url}
  //           />
  //         </>
  //       );
  //     } else {
  //       dispatch(signedOut());
  //     }

  //     return (
  //       <>
  //         <p className='text-neutral-50'>Sign up? (Existing session.)</p>
  //         <UserSignupForm
  //           email={session.user?.email ?? ''}
  //           username={session.user?.name ?? ''}
  //         />
  //         <Link href='/api/auth/signout'>Sign out</Link>
  //       </>
  //     );
  //   }

  //   return <p className='text-neutral-50'>Sign up? (No session.)</p>;
  // }

  // return <p className='text-neutral-50'>Unauthenticated</p>;
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
