'use client';

import HomeView from '@muze/components/HomeView/HomeView';
import ImageCard from '@muze/components/ImageCard/ImageCard';
import C from '@muze/components/TextFormatting/Code';
import { roboto_mono } from '@muze/lib/fonts';
import Image from 'next/image';

export default async function Home() {
  return (
    <>
      <div>
        {/* className='h-full' */}
        <HomeView />
      </div>
      <div className='grow flex flex-col gap-2 justify-center items-center pointer-events-none'>
        <ImageCard src='/RadicalEdward.gif' alt='Under construction' />
        {/* height={340}
          width={500}
          className='rounded-2xl' */}
        <p
          className={[
            'text-neutral-500 text-2xl font-black mt-2',
          ].join(' ')}
        >
          Under Construction
        </p>
        <p className='text-neutral-600'>(but feel free to explore)</p>
      </div>
      <p>
        ✨ Hold <C>Alt</C> for keyboard shortcuts.
      </p>
      <p>
        ⚡ Type <C>/v books</C> and hit <C>Enter</C> to view all your Book
        entries.
      </p>
    </>
  );
}
