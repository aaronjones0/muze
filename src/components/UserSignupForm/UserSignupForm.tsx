'use client';

import { ArrowUpTrayIcon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { useRef, useState } from 'react';
import Input from '../Input/Input';
import FieldLabel from '../FieldLabel/FieldLabel';

export default function UserSignupForm({
  email,
  username,
}: {
  email: string;
  username?: string;
}) {
  const [fullName, setFullName] = useState(username ?? '');
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newUsername, setUsername] = useState(username ?? '');
  const [profileImage, setProfileImage] = useState<Blob | null>(null);

  const fileField = useRef<HTMLInputElement | null>(null);

  return (
    <div className='flex flex-col gap-4'>
      <FieldLabel label='Full Name' required>
        <Input
          id='fullNameInput'
          label='Full Name'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </FieldLabel>
      <FieldLabel label='First Name'>
        <Input
          id='firstNameInput'
          label='First Name'
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
      </FieldLabel>
      <FieldLabel label='Middle Name'>
        <Input
          id='middleNameInput'
          label='Middle Name'
          value={middleName}
          onChange={(e) => setMiddleName(e.target.value)}
        />
      </FieldLabel>
      <FieldLabel label='Last Name'>
        <Input
          id='lastNameInput'
          label='Last Name'
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </FieldLabel>
      <FieldLabel label='Username' required>
        <Input
          id='usernameInput'
          label='Username'
          value={newUsername}
          onChange={(e) => setUsername(e.target.value)}
        />
      </FieldLabel>
      <FieldLabel label='Email'>
        <Input
          id='emailInput'
          label='Email'
          value={email}
          onChange={(e) => {}}
          disabled
        />
      </FieldLabel>
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
                    className='object-cover h-20 w-20'
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
                ref={fileField}
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
          {profileImage && <p>Image size: {profileImage.size / 1000000} MB</p>}
        </div>
      </label>
      <button
        className='w-fit rounded-full bg-neutral-800 hover:bg-neutral-700 active:bg-neutral-600 px-3 py-2 text-neutral-50'
        onClick={async () => {
          if (!profileImage) {
            createUser();
          } else {
            try {
              const response = await fetch(`/api/assets/profile-image`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/octet-stream',
                },
                body: await profileImage.arrayBuffer(),
              });

              const profileImageDoc = await response.json();
              console.log(profileImageDoc);
              createUser(profileImageDoc._id);
            } catch (error) {
              console.log(error);
            }
          }
        }}
      >
        Sign up
      </button>
    </div>
  );

  async function createUser(documentId?: string) {
    if (!documentId) {
      console.debug('No document ID.');
    }

    try {
      const response = await fetch(`/api/users/create-user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          _type: 'user',
          full_name: fullName,
          first_name: firstName,
          middle_name: middleName,
          last_name: lastName,
          username: newUsername,
          email: email,
          profile_image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: documentId,
            },
          },
        }),
      });

      const result = await response.json();

      console.log('Success:', result);
    } catch (error) {
      // TODO: Delete uploaded profile image here.
      console.log(error);
    }
  }
}
