'use client';

import { Transition } from '@headlessui/react';
import useHotkey from '@muze/hooks/useHotkey';
import { roboto_mono } from '@muze/lib/fonts';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LinkButton({
  label,
  href,
  className,
  hotkey,
}: {
  label: string;
  href: string;
  className?: string;
  hotkey?: string;
}) {
  const router = useRouter();
  const { hotkeyHintIsVisible } = useHotkey(hotkey, () => router.push(href));

  return (
    <div
      className={[
        'relative shadow-nh-md w-fit rounded-full my-4',
        className,
      ].join(' ')}
    >
      <Link
        href={href}
        className='shadow-ns-md border-t-2 border-l border-neutral-800 hover:border-neutral-700 px-3 py-2 rounded-full text-neutral-400 hover:text-neutral-300 bg-neutral-900 hover:bg-neutral-800 w-fit'
      >
        {label}
      </Link>
      {hotkey ? (
        <div className='absolute -top-4 -right-4'>
          <Transition
            show={hotkeyHintIsVisible}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0 scale-75'
            enterTo='opacity-100 scale-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-75'
          >
            <p
              className={[
                roboto_mono.className,
                'rounded-md h-6 w-6 border-2 overflow-hidden',
                'bg-neutral-900 border-amber-500 text-amber-500 shadow-md shadow-amber-500/30',
                'align-middle text-center leading-none pt-0.5',
              ].join(' ')}
            >
              {hotkey}
            </p>
          </Transition>
        </div>
      ) : null}
    </div>
  );
}
