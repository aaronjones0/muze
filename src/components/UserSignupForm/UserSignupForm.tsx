'use client';

import Image from 'next/image';
import { useState } from 'react';
import Input from '../Input/Input';
import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';

export default function UserSignupForm({
  email,
  username,
  onSubmit,
}: {
  email: string;
  username?: string;
  onSubmit: (
    fullName: string,
    firstName: string,
    middleName: string,
    lastName: string,
    username: string,
    profileImage: Blob | null
  ) => void;
}) {
  const [fullName, setFullName] = useState(username ?? '');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newUsername, setUsername] = useState(username ?? '');
  const [profileImage, setProfileImage] = useState<Blob | null>(null);

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
        value={newUsername}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Input
        required
        label='Email'
        value={email}
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
                  console.log(event.target.files ? event.target.files[0] : '');
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
    </div>
  );
}
