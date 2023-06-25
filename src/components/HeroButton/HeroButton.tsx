'use client';

import Link from 'next/link';

export default function HeroButton({
  label,
  href,
  primary,
}: {
  label: string;
  href: string;
  primary?: boolean;
}) {
  return (
    <Link href={href} className='group'>
      <div className={['rounded-2xl', primary ? '' : 'shadow-nh-md'].join(' ')}>
        <div
          className={[
            primary ? '' : 'shadow-ns-md',
            'cursor-pointer h-12 w-52 rounded-2xl bg-neutral-900',
            'relative flex items-center justify-center',
            'border-t-2 border-l border-neutral-800',
          ].join(' ')}
        >
          <p
            className={[
              'font-black',
              primary
                ? 'text-amber-500/90 group-hover:text-amber-500 transition-colors'
                : 'text-neutral-700',
            ].join(' ')}
          >
            {label}
          </p>
          {primary ? (
            <div className='rounded-2xl absolute top-0 bottom-0 left-0 right-0 shadow-md shadow-amber-500 animate-pulse flex flex-row items-center justify-center'></div>
          ) : null}
        </div>
      </div>
    </Link>
  );
}
