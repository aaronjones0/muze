'use client';

import Image from 'next/image';
import { BoltIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import LinkButton from '../LinkButton/LinkButton';
import { useCallback, useEffect, useRef, useState } from 'react';
import HotkeyBadge from '../HotkeyBadge/HotkeyBadge';
import { Transition } from '@headlessui/react';

export default function AppHeader({
  command,
  onCommandChanged,
  onAddEntry,
}: {
  command: string;
  onCommandChanged: (command: string) => void;
  onAddEntry: () => void;
}) {
  const [hotkeysActive, setHotkeysActive] = useState(false);

  const commandInput = useRef<HTMLInputElement>(null);

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
    <div className='flex flex-row gap-8 items-center w-full'>
      <Image src='/MuzeLogo.svg' height={80} width={80} alt='Muze Logo' />
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
            <p>/</p>
          </Transition>
          {/* ) : null} */}
          <input
            ref={commandInput}
            type='text'
            className={[
              'peer bg-neutral-900 outline-none w-full',
              command?.startsWith('/')
                ? 'font-medium text-sky-400'
                : 'text-neutral-500',
            ].join(' ')}
            value={command}
            onChange={(e) => onCommandChanged(e.target.value)}
          />
          <BoltIcon className='peer-focus:text-neutral-500 h-6 w-6' />
          {/* <MagnifyingGlassIcon className='peer-focus:text-neutral-500 h-6 w-6' /> */}
        </div>
      </div>
      <LinkButton
        label='Add'
        href='/add-entry'
        hotkey='a'
      />
    </div>
  );
}
