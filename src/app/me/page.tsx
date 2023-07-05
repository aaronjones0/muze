'use client';

import LinkButton from '@muze/components/LinkButton/LinkButton';
import useRequiredSession from '@muze/hooks/useRequiredSession';
import useUser from '@muze/hooks/useUser';
import Image from 'next/image';

export default async function Me() {
  const { session, status } = useRequiredSession();
  const getUser = await useUser();

  if (status === 'loading') {
    return <p className='animate-pulse'>Processing...</p>;
  }

  if (!!session) {
    const users = await getUser(session.user?.email ?? '');
    const user = users ? users[0] : undefined;

    return (
      !!user && (
        <div className='flex flex-col text-neutral-500'>
          <div className='flex justify-center items-center'>
            {user && (
              <div className='rounded-full w-44 h-44 overflow-hidden'>
                <Image
                  src={user.profile_image_url}
                  alt='Profile Avatar'
                  height={192}
                  width={192}
                  className='rounded-full'
                />
              </div>
            )}
          </div>
          <h1 className='text-4xl font-black'>Profile</h1>
          <p className='font-black'>{user.full_name}</p>
          <p className='font-light'>{user.email}</p>
          <LinkButton label='Home' href='/' hotkey='h' />
        </div>
      )
    );
  }

  // return (
  //   <div className='flex flex-col text-neutral-500'>
  //     <div className='flex justify-center items-center'>
  //       {user && (
  //         <div className='rounded-full w-44 h-44 overflow-hidden'>
  //           <Image
  //             src={user.profile_image_url}
  //             alt='Profile Avatar'
  //             height={192}
  //             width={192}
  //             className='rounded-full'
  //           />
  //         </div>
  //       )}
  //     </div>
  //     <h1 className='text-4xl font-black'>Profile</h1>
  //     <p className='font-black'>{user.name}</p>
  //     <p className='font-light'>{user.email}</p>
  //     <LinkButton label='Home' href='/' hotkey='h' />
  //   </div>
  // );
}
