'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function ProfileBadge({
  username,
  email,
  profileImageUrl,
}: {
  username: string;
  email: string;
  profileImageUrl: string;
}) {
  return (
    <Link href='/me' className='w-fit'>
      <div className='group cursor-pointer shadow-nh-md rounded-full w-fit mt-4 border-t-2 border-l border-neutral-700'>
        <div className='rounded-full w-fit flex flex-row items-center gap-3 p-3 bg-neutral-900 shadow-ns-md shadow-black'>
          <Image
            src={profileImageUrl}
            alt='Profile Avatar'
            height={40}
            width={40}
            className='h-10 w-10 object-cover rounded-full shadow-sm shadow-black opacity-90 group-hover:opacity-100 transition-opacity'
          />
          <div className='rounded-full flex flex-col group-hover:text-neutral-400 transition-colors'>
            <p className='font-black leading-5'>{username}</p>
            <p className='font-light leading-5 max-w-[120px] overflow-hidden text-ellipsis'>
              {email}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}
