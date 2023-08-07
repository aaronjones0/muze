'use client';

import { useUser } from '@auth0/nextjs-auth0/client';
import HomeView from '@muze/components/HomeView/HomeView';

export default async function Page() {
  // const user = useSelector(userSelector);
  // const dispatch = useDispatch();
  const { user, error, isLoading } = useUser();

  // const { data: session, status } = useSession({
  //   required: true,
  //   onUnauthenticated() {
  //     signIn();
  //   },
  // });

  // useEffect(() => {
  //   if (
  //     status === 'authenticated' &&
  //     !!session &&
  //     session.user?.email !== user?.email
  //   ) {
  //     getUser(session.user?.email ?? '').then((user) => {
  //       if (!!user) {
  //         dispatch(signedIn(user));
  //       } else {
  //         dispatch(signedOut());
  //       }
  //     });
  //   }
  // }, [status, session, dispatch, user]);

  //   return (
  //     <Provider store={store}>
  //       {status === 'loading' && <ProcessingIndicator text='Processing' />}
  //       {status === 'authenticated' && !!session && !!user && (
  //         <HomeView
  //           email={user.email}
  //           username={user.username}
  //           profileImageUrl={user.profile_image_url}
  //         />
  //       )}
  //     </Provider>
  //   );
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return (
      <div>
        <h1>:(</h1>
        <p>{error.name}</p>
        <p>{error.message}</p>
      </div>
    );
  }

  if (user) {
    return (
      <HomeView
        email={user.email ?? ''}
        username={user.nickname ?? ''}
        profileImageUrl=''
      />
    );
  }
}

// async function getUser(email: string): Promise<User | undefined> {
//   const users = await sanity.fetch(`*[_type == "user" && email == "${email}"]{
//     _id,
//     _type,
//     full_name,
//     first_name,
//     middle_name,
//     last_name,
//     username,
//     email,
//     "profile_image_url": profile_image.asset->url
//   }`);

//   if (!!users) {
//     return users[0];
//   } else {
//     return users;
//   }
// }
