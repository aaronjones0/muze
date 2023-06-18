'use client';

export default function ImageTile({ src, alt }: { src: string; alt: string }) {
  return (
    <div>
      <div className='inline-block hover:text-neutral-400'>
        <div className='m-3 rounded-xl w-fit shadow-nh-md cursor-pointer'>
          <div className='h-full w-full rounded-xl shadow-ns-md overflow-hidden border-2 border-neutral-900'>
            <img src={src} alt={alt} />
          </div>
        </div>
      </div>
    </div>
  );
}
