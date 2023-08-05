'use client';

import HomeView from '@muze/components/HomeView/HomeView';
import ProcessingIndicator from '@muze/components/ProcessingIndicator/ProcessingIndicator';
import { signedIn, signedOut } from '@muze/lib/redux/slices/userSlice';
import store, { userSelector } from '@muze/lib/redux/store';
import { sanity } from '@muze/lib/sanity-client';
import { User } from '@muze/model/User';
import { signIn, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';

export default async function Page() {
  const user = useSelector(userSelector);
  const dispatch = useDispatch();

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  useEffect(() => {
    if (
      status === 'authenticated' &&
      !!session &&
      session.user?.email !== user?.email
    ) {
      getUser(session.user?.email ?? '').then((user) => {
        if (!!user) {
          dispatch(signedIn(user));
        } else {
          dispatch(signedOut());
        }
      });
    }
  }, [status, session, dispatch, user]);

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
