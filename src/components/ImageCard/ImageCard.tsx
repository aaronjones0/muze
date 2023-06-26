'use client';

export default function ImageCard({ src, alt }: { src?: string; alt: string }) {
  return (
    <div className='shadow-nh-md rounded-2xl'>
      <img
        className='rounded-2xl border-4 border-neutral-900 shadow-ns-md'
        src={src ?? ''}
        alt={`${alt} cover image`}
      />
    </div>
  );
}
