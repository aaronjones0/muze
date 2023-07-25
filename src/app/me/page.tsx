'use client';

import LinkButton from '@muze/components/LinkButton/LinkButton';
import ProcessingIndicator from '@muze/components/ProcessingIndicator/ProcessingIndicator';
import useRequiredSession from '@muze/hooks/useRequiredSession';
import store, { userSelector } from '@muze/lib/redux/store';
import Image from 'next/image';
import { Provider, useSelector } from 'react-redux';

export default async function Me() {
  const user = useSelector(userSelector);
  const { session, status } = useRequiredSession();
  // const getUser = await useUserQuery();

  return (
    !!session && (
      <Provider store={store}>
        {status === 'loading' && <ProcessingIndicator text='Processing' />}
        {status === 'authenticated' && !!user && (
          <div className='flex flex-col text-neutral-500'>
            <div className='flex justify-center items-center'>
              <div className='rounded-full w-44 h-44 overflow-hidden'>
                <Image
                  priority
                  src={user.profile_image_url}
                  alt='Profile Avatar'
                  height={192}
                  width={192}
                  className='rounded-full'
                />
              </div>
            </div>
            <h1 className='text-4xl font-black'>Profile</h1>
            <p className='font-black'>{user.full_name}</p>
            <p className='font-light'>{user.email}</p>
            <LinkButton label='Home' href='/home' hotkey='h' />
          </div>
        )}
      </Provider>
    )
  );

  // if (status === 'loading') {
  //   return <p className='animate-pulse'>Processing...</p>;
  // }

  // if (!!session) {
  //   // const users = await getUser(session.user?.email ?? '');
  //   // const user = users ? users[0] : undefined;

  //   return (
  //     !!user && (
  //       <div className='flex flex-col text-neutral-500'>
  //         <div className='flex justify-center items-center'>
  //           {user && (
  //             <div className='rounded-full w-44 h-44 overflow-hidden'>
  //               <Image
  //                 priority
  //                 src={user.profile_image_url}
  //                 alt='Profile Avatar'
  //                 height={192}
  //                 width={192}
  //                 className='rounded-full'
  //               />
  //             </div>
  //           )}
  //         </div>
  //         <h1 className='text-4xl font-black'>Profile</h1>
  //         <p className='font-black'>{user.full_name}</p>
  //         <p className='font-light'>{user.email}</p>
  //         <LinkButton label='Home' href='/home' hotkey='h' />
  //       </div>
  //     )
  //   );
  // }
}