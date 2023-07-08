'use client';

import Image from 'next/image';
import HeroButton from '../HeroButton/HeroButton';

export default async function FrontDoor() {
  // const { data: session, status } = useSession();
  // const getUser = useUser();

  // if (status === 'loading') {
  //   return <ProcessingIndicator text='Processing' />;
  // }

  // if (status === 'authenticated') {
  // if (!!session) {
  //   const users = await getUser(session.user?.email ?? '');
  //   const user = users ? users[0] : undefined;

  //   return (
  //     <>
  //       {user && (
  //         // <HomeView
  //         //   email={user.email}
  //         //   username={user.username}
  //         //   profileImageUrl={user.profile_image_url}
  //         // />
  //         <p>{user.email}</p>
  //       )}
  //       {/* <ul>
  //           <li>{user?._id}</li>
  //           <li>{user?.email}</li>
  //           <li>{user?.username}</li>
  //           <li>{user?.full_name}</li>
  //         </ul> */}
  //     </>
  //   );
  // }
  // }

  // if (status === 'unauthenticated') {
    return (
      <>
        <div className='flex flex-col justify-center items-center gap-16'>
          <h1 className='text-[100px] font-black text-neutral-900 drop-shadow-[0_4px_6px_-1px_rgb(245,158,11)]'>
            Muze
          </h1>
          <Image
            priority
            src='/MuzeTextLogo_v2.png'
            alt='Muze Logo'
            height={484}
            width={963}
            className='h-min w-min'
          />
          <HeroButton label='Enter' href='/home' />
        </div>
      </>
    );
  // }
}
