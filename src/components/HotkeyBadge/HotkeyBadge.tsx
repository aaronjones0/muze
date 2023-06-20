'use client';

export default function HotkeyBadge({
  key,
  className,
}: {
  key: string;
  className?: string;
}) {
  return (
    <p className='rounded-md h-6 w-6 border-2 overflow-hidden border-amber-400 text-amber-400 align-middle text-center leading-none pt-0.5'>
      {key}
    </p>
  );
}
