'use client';

import Image from 'next/image';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import LinkButton from '../LinkButton/LinkButton';
import { useCallback, useEffect, useRef, useState } from 'react';
import HotkeyBadge from '../HotkeyBadge/HotkeyBadge';
import { Transition } from '@headlessui/react';
import { roboto_mono } from '@muze/lib/fonts';

export default function AppHeader({
  command,
  onCommandChanged,
}: {
  command: string;
  onCommandChanged: (command: string) => void;
}) {
  const [hotkeysActive, setHotkeysActive] = useState(false);

  const commandInput = useRef<HTMLInputElement>(null);
  const [commanding, setCommanding] = useState(false);

  const handleKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.key === '/' && event.altKey && !!commandInput.current) {
      event.stopPropagation();
      event.preventDefault(); // Do not type the "/" in the input.
      commandInput.current.focus();
    } else if (event.altKey) {
      setHotkeysActive(true);
    }
  }, []);

  const handleKeyUp = useCallback((event: KeyboardEvent) => {
    if (!event.altKey) {
      event.stopPropagation();
      event.preventDefault();
      setHotkeysActive(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    document.addEventListener('keyup', handleKeyUp);
  }, [handleKeyUp]);

  return (
    <>
      <div className='flex flex-row gap-8 items-center w-full'>
        <Image
          priority
          src='/MuzeLogo.svg'
          height={80}
          width={80}
          alt='Muze Logo'
        />
        <div
          className={[
            'relative rounded-full h-min w-full',
            // 'shadow-ncs-sm',
            'border-2 border-neutral-800',
          ].join(' ')}
        >
          <div
            className={[
              'flex flex-row-reverse items-center gap-2 rounded-full',
              // 'shadow-nch-sm',
              'shadow-inner shadow-black',
              'overflow-hidden pl-3 pr-4 py-2 h-min w-full',
            ].join(' ')}
          >
            {/* {hotkeysActive ? ( */}
            <Transition
              appear={true}
              show={hotkeysActive}
              enter='transition-opacity duration-75'
              enterFrom='opacity-0 scale-75'
              enterTo='opacity-100 scale-100'
              leave='transition-opacity duration-150'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-75'
              className='rounded-md h-6 w-6 border-2 overflow-hidden bg-neutral-900 border-amber-400 text-amber-400 align-middle text-center leading-none pt-0.5'
            >
              <p className={roboto_mono.className}>/</p>
            </Transition>
            {/* ) : null} */}
            <input
              ref={commandInput}
              type='text'
              className={[
                `peer bg-neutral-900 outline-none w-full ${roboto_mono.className}`,
                commanding
                  ? `font-medium focus:text-amber-400 text-amber-600`
                  : 'text-neutral-500',
              ].join(' ')}
              value={command}
              onChange={(e) => {
                setCommanding(e.target.value.startsWith('/'));
                onCommandChanged(e.target.value);
              }}
            />
            <BoltIcon
              className={[
                'h-6 w-6',
                commanding
                  ? 'peer-focus:text-amber-400'
                  : 'peer-focus:text-neutral-500',
              ].join(' ')}
            />
            {/* <MagnifyingGlassIcon className='peer-focus:text-neutral-500 h-6 w-6' /> */}
          </div>
        </div>
        <LinkButton label='Add' href='/add-entry' hotkey='a' />
      </div>
      {commanding ? (
        <div className='ml-36 flex flex-row gap-1'>
          <p>
            <span className='bg-amber-400 text-neutral-900 rounded-lg p-1'>
              {command.toLowerCase() === '/g books'
                ? 'Go to Books'
                : command.startsWith('/g')
                ? 'Go to...'
                : '...'}
            </span>
          </p>
          <Transition
            appear={true}
            show={command.toLowerCase() === '/g books'}
            enter='transition-opacity duration-75'
            enterFrom='opacity-0 scale-75'
            enterTo='opacity-100 scale-100'
            leave='transition-opacity duration-150'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-75'
          >
            <ArrowRightIcon className='h-6 w-6 text-green-400' />
          </Transition>
        </div>
      ) : null}
    </>
  );
}
