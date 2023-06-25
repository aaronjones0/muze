'use client';

export default function ProcessingIndicator({ text }: { text?: string }) {
  return (
    <div className='h-full w-full flex justify-center items-center animate-pulse text-xl font-black tracking-wider text-neutral-400'>
      <p>{text ?? 'Loading...'}</p>
    </div>
  );
}
