'use client';

import { LifebuoyIcon } from '@heroicons/react/24/outline';
import HomeView from '@muze/components/HomeView/HomeView';
import ImageCard from '@muze/components/ImageCard/ImageCard';
import C from '@muze/components/TextFormatting/Code';
import Link from 'next/link';
import Image from 'next/image';
import LinkButton from '@muze/components/LinkButton/LinkButton';

export default async function Home() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-16'>
        <h1 className='text-[100px] font-black text-neutral-900 drop-shadow-[0_4px_6px_-1px_rgb(245,158,11)]'>
          Muze
        </h1>
        {/* <Image
          src='/MuzeLogo-192px.png'
          alt='Muze Logo'
          height={96}
          width={96}
        /> */}
        <Image
          src='/MuzeTextLogo_v2.png'
          alt='Muze Logo'
          height={963}
          width={484}
        />
        <Link href='/api/auth/signin' className='group'>
          <div className='cursor-pointer h-12 w-52 rounded-2xl bg-neutral-900 relative flex items-center justify-center border-t-2 border-l border-neutral-800'>
            <p className='text-amber-500/90 group-hover:text-amber-500 font-black transition-colors'>
              Sign in
            </p>
            <div className='rounded-2xl absolute top-0 bottom-0 left-0 right-0 shadow-lg shadow-amber-500 animate-pulse flex flex-row items-center justify-center'></div>
            {/* <div className='absolute'>&nbsp;</div> */}
          </div>
        </Link>
        <Link href='/api/auth/new-user' className='group'>
          <div className='shadow-nh-md rounded-2xl h-12 w-52'>
            <div className='h-full w-full shadow-ns-md rounded-2xl flex items-center justify-center'>
              <p className='text-neutral-700 group-hover:text-neutral-400 font-black transition-colors'>
                Sign up
              </p>
            </div>
          </div>
        </Link>
        {/* <LinkButton label='Sign in' href='/api/auth/signin' hotkey='s' /> */}
        {/* <div className='shadow-nh-md w-full rounded-full my-8'>
          <div className='shadow-ns-md w-full rounded-full'>&nbsp;</div>
        </div> */}
        {/* <LinkButton label='Sign up' href='/api/auth/new-user' hotkey='u' /> */}
      </div>
      {/* <div className='h-20'>
        <HomeView />
      </div>
      <div className='grow flex flex-col gap-2 mx-4 justify-center items-center pointer-events-none'>
        <ImageCard src='/RadicalEdward.gif' alt='Under construction' />
        <p className={['text-neutral-500 text-2xl font-black mt-2'].join(' ')}>
          Under Construction
        </p>
        <p className='text-neutral-600'>(but feel free to explore)</p>
      </div>
      <p className='max-md:hidden'>
        ✨ Hold <C>Alt</C> for keyboard shortcuts.
      </p>
      <p>
        ⚡ Type <C>/v books</C> and hit <C>Enter</C> to view all your Book
        entries. Also try <C>/v tvseries</C> and <C>/v manga</C>.
      </p>
      <div className='relative shadow-nh-md w-fit rounded-full my-4'>
        <Link
          target='_blank'
          href='https://windfallprojects.gitbook.io/muze'
          className='shadow-ns-md flex flex-row gap-1.5 items-center border-t-2 border-neutral-800 hover:border-neutral-700 px-3 py-2 rounded-full text-neutral-400 hover:text-neutral-300 bg-neutral-900 hover:bg-neutral-800 w-fit'
        >
          <LifebuoyIcon className='h-6 w-6 text-indigo-500' />
          Help
        </Link>
      </div> */}
    </>
  );
}
