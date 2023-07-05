'use client';

import FrontDoor from '@muze/components/FrontDoor/FrontDoor';

export default async function Page() {
  return <FrontDoor />;
  // const { data: session, status } = useSession();

  // if (status === 'loading') {
  //   return <ProcessingIndicator text='Processing...' />;
  // }

  // if (!!session) {
  //   if (!session.user || !session.user.email) {
  //     throw new Error('Unable to read your email address after sign-in.');
  //   }

  //   const user = await getUser(session.user.email);

  //   if (!!user) {
  //     return (
  //       <>
  //         <div className='h-20'>
  //           <HomeView
  //             username={user.username}
  //             email={user.email}
  //             profileImageUrl={user.profile_image_url}
  //           />
  //         </div>
  //         <div className='grow flex flex-col gap-2 mx-4 justify-center items-center pointer-events-none'>
  //           <ImageCard src='/RadicalEdward.gif' alt='Under construction' />
  //           <p
  //             className={['text-neutral-500 text-2xl font-black mt-2'].join(
  //               ' '
  //             )}
  //           >
  //             Under Construction
  //           </p>
  //           <p className='text-neutral-600'>(but feel free to explore)</p>
  //         </div>
  //         <p className='max-md:hidden'>
  //           ✨ Hold <C>Alt</C> for keyboard shortcuts.
  //         </p>
  //         <p>
  //           ⚡ Type <C>/v books</C> and hit <C>Enter</C> to view all your Book
  //           entries. Also try <C>/v tvseries</C> and <C>/v manga</C>.
  //         </p>
  //         <div className='relative shadow-nh-md w-fit rounded-full my-4'>
  //           <Link
  //             target='_blank'
  //             href='https://windfallprojects.gitbook.io/muze'
  //             className='shadow-ns-md flex flex-row gap-1.5 items-center border-t-2 border-neutral-800 hover:border-neutral-700 px-3 py-2 rounded-full text-neutral-400 hover:text-neutral-300 bg-neutral-900 hover:bg-neutral-800 w-fit'
  //           >
  //             <LifebuoyIcon className='h-6 w-6 text-indigo-500' />
  //             Help
  //           </Link>
  //         </div>
  //       </>
  //     );
  //   } else {
  //     return (
  //       <>
  //         <p>
  //           The Account with which you signed in does not have a Library. Would
  //           you like to sign up?
  //         </p>
  //         <div className='flex flex-row items-center gap-3'>
  //           <HeroButton label='Sign up' href='/sign-up' primary />
  //           <HeroButton label='Sign out' href='/api/auth/signout' />
  //         </div>
  //       </>
  //     );
  //   }
  // }
}

// async function getUser(userEmail: string) {
//   const users: User[] =
//     await sanity.fetch(`*[_type == "user" && email == "${userEmail}"]{
//     _id,
//     full_name,
//     email,
//     "profile_image_url": profile_image.asset->url
//   }`);

//   return users[0];
// }

// async function getLibrary(userEmail: string) {
//   const library = sanity.fetch(`*[_type == "library" && owner]`)
// }
