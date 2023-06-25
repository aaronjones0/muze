'use client';

import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import useRequiredSession from '@muze/hooks/useRequiredSession';
import useSignup from '@muze/hooks/useSignup';
import Image from 'next/image';
import { useState } from 'react';
import Input from '../Input/Input';
import ProcessingIndicator from '../ProcessingIndicator/ProcessingIndicator';
import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';
import { useRouter } from 'next/navigation';

export default function Signup() {
  const { session, status } = useRequiredSession();

  const signUpNewUser = useSignup();
  const sanityWrite = useSanityWriteClient();
  const router = useRouter();

  const [fullName, setFullName] = useState(session?.user?.name ?? '');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState(session?.user?.name ?? '');
  const [profileImage, setProfileImage] = useState<File | null>(null);

  if (status === 'loading') {
    return <ProcessingIndicator text='Processing...' />;
  }

  if (!!session) {
    if (!session?.user?.email) {
      throw new Error('Unable to read your email address after sign-in.');
    }

    return (
      <div className='flex flex-col gap-4'>
        <Input
          required
          label='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <Input
          label='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label='Middle Name'
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
        <Input
          label='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Input
          required
          label='Username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          required
          label='Email'
          value={session.user.email}
          onChange={(e) => {}}
          disabled
        />
        <label className='flex flex-col gap-2 pl-3'>
          <span className='text-neutral-500'>Profile Image</span>
          <div className='flex flex-row items-center gap-4'>
            <div className='shadow-nh-md rounded-full h-fit w-fit border-t-2 border-l border-neutral-800'>
              <div
                className={[
                  'group relative flex justify-center items-center rounded-full overflow-hidden bg-neutral-900 h-20 w-20 shadow-ns-md',
                ].join(' ')}
              >
                {profileImage ? (
                  <div className='flex flex-row items-center'>
                    <Image
                      className='object-cover'
                      height={80}
                      width={80}
                      src={URL.createObjectURL(profileImage)}
                      alt='No image'
                    />
                  </div>
                ) : (
                  <ArrowUpTrayIcon className='h-6 w-6 text-neutral-700 group-hover:text-neutral-500' />
                )}
                <input
                  className={[
                    'cursor-pointer absolute h-full w-full opacity-0',
                  ].join(' ')}
                  type='file'
                  name='myImage'
                  onChange={(event) => {
                    console.log(
                      event.target.files ? event.target.files[0] : ''
                    );
                    setProfileImage(
                      event.target.files ? event.target.files[0] : null
                    );
                  }}
                />
              </div>
            </div>
            <button
              className='p-2 flex flex-row gap-1.5'
              onClick={() => setProfileImage(null)}
            >
              <XMarkIcon className='h-6 w-6' /> Remove
            </button>
          </div>
        </label>
        <button
          className='text-neutral-500'
          onClick={() => {
            // console.log(
            //   `FN: ${firstName} | MN: ${middleName} | LN: ${lastName} | UN: ${username} | Email: ${
            //     session.user?.email ?? undefined
            //   } | Profile Photo: ${profileImage ?? undefined}`
            // );

            console.log(
              JSON.stringify({
                mutations: [
                  {
                    create: {
                      _type: 'user',
                      full_name: fullName,
                      first_name: firstName,
                      middle_name: middleName,
                      last_name: lastName,
                      username: username,
                      email: session.user?.email ?? undefined,
                    },
                  },
                ],
              })
            );

            const spid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
            const apiv = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
            const ds = process.env.NEXT_PUBLIC_SANITY_DATASET;
            console.log(
              `https://${spid}.api.sanity.io/v${apiv}/data/mutate/${ds}`
            );

            sanityWrite
              .create({
                _type: 'user',
                full_name: fullName,
                first_name: firstName,
                middle_name: middleName,
                last_name: lastName,
                username: username,
                email: session.user?.email ?? '',
              })
              .then((doc) => {
                router.push('/');
              });

            // signUpNewUser(
            //   fullName,
            //   firstName,
            //   middleName,
            //   lastName,
            //   username,
            //   session.user?.email ?? undefined,
            //   profileImage ?? undefined
            // );
          }}
        >
          Sign up
        </button>
      </div>
    );
  }
}
