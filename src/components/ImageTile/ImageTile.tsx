'use client';

export default function ImageTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div
      className={[
        'h-full w-full',
        'inline-block w-full',
      ].join(' ')}
    >
      <div
        className={[
          'h-full w-full',
          'rounded-3xl shadow-nh-md cursor-pointer',
        ].join(' ')}
      >
        <div
          className={[
            'h-full w-full',
            'overflow-hidden',
            'relative flex justify-center items-center rounded-3xl shadow-ns-md overflow-hidden border-4 border-neutral-900',
          ].join(' ')}
        >
          {/* <div className={['absolute top-0 bottom-0 right-0 left-0 z-10'].join(' ')}> */}
          <img
            src={`${src}`}
            alt={alt}
            className='object-contain shadow-md shadow-black ring-1 ring-neutral-900 absolute self-center justify-self-center max-lg:h-full lg:w-auto z-10'
          />
          {/* </div> */}
          {/* <div */}
          {/* // className={['absolute h-full w-full z-0'].join(' ')} */}
          {/* > */}
          <img
            src={`${src}?blur=500`}
            alt={alt}
            className='absolute h-full w-full'
          />
          {/* </div> */}
        </div>
      </div>
    </div>
  );
}
