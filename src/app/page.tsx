'use client';

import { LifebuoyIcon } from '@heroicons/react/24/outline';
import HomeView from '@muze/components/HomeView/HomeView';
import ImageCard from '@muze/components/ImageCard/ImageCard';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import C from '@muze/components/TextFormatting/Code';
import Link from 'next/link';

export default async function Home() {
  return (
    <>
      <div className='h-20'>
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
      </div>
    </>
  );
}
