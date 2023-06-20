'use client';

import { Transition } from '@headlessui/react';
import { BoltIcon } from '@heroicons/react/24/outline';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { MuzeCommands } from '@muze/constants/muze-commands';
import useHotkey from '@muze/hooks/useHotkey';
import { MuzeCommand } from '@muze/interfaces/MuzeCommand';
import { roboto_mono } from '@muze/lib/fonts';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';
import LinkButton from '../LinkButton/LinkButton';
import { MuzeAction } from '@muze/interfaces/MuzeAction';
import { useRouter } from 'next/navigation';

export default function AppHeader({
  commandBarValue,
  onCommandChanged,
}: {
  commandBarValue: string;
  onCommandChanged: (command: string) => void;
}) {
  const router = useRouter();
  const commandInput = useRef<HTMLInputElement>(null);
  const [commanding, setCommanding] = useState(false);
  const [command, setCommand] = useState<MuzeCommand | null>(null);
  const [action, setAction] = useState<MuzeAction | null>(null);

  const getCommandFromString = useCallback((s: string) => {
    return MuzeCommands.ValidCommands.find(
      (c) => c.code === s.substring(0, 2).toLowerCase()
    );
  }, []);

  const getAction = useCallback((s: string) => {
    return MuzeCommands.ValidActions.find((a) => a.code === s.toLowerCase());
  }, []);

  const { hotkeyHintIsVisible } = useHotkey('/', () =>
    commandInput.current?.focus()
  );

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Enter' && !!action) {
        event.preventDefault();
        event.stopPropagation();
        document.removeEventListener('keydown', handleKeyDown);
        router.push(action.href);
      }
    },
    [router, action]
  );

  useEffect(() => {
    if (action !== null) {
      document.addEventListener('keydown', handleKeyDown);
    }
  }, [action, handleKeyDown]);

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
            'border-2 border-neutral-800',
          ].join(' ')}
        >
          <div
            className={[
              'flex flex-row-reverse items-center gap-2 rounded-full',
              'shadow-inner shadow-black',
              'overflow-hidden pl-3 pr-4 py-2 h-min w-full',
            ].join(' ')}
          >
            <Transition
              appear={true}
              show={hotkeyHintIsVisible}
              enter='transition-opacity duration-75'
              enterFrom='opacity-0 scale-75'
              enterTo='opacity-100 scale-100'
              leave='transition-opacity duration-150'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-75'
              className={[
                'rounded-md h-6 w-6 border-2 overflow-hidden',
                'bg-neutral-900 border-amber-400 text-amber-400',
                'align-middle text-center leading-none pt-0.5',
              ].join(' ')}
            >
              <p className={roboto_mono.className}>/</p>
            </Transition>
            <input
              ref={commandInput}
              type='text'
              className={[
                `peer bg-neutral-900 outline-none w-full ${roboto_mono.className}`,
                commanding
                  ? `font-medium focus:text-amber-400 text-amber-600`
                  : 'text-neutral-500',
              ].join(' ')}
              value={commandBarValue}
              onChange={(e) => {
                // console.log('e.target.value:');
                // console.log(e.target.value);
                // console.log('action:');
                // console.log(action);
                // console.log('command:');
                // console.log(command);
                setCommand(getCommandFromString(e.target.value) ?? null);
                setAction(getAction(e.target.value) ?? null);
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
          </div>
        </div>
        <LinkButton label='Add' href='/add-entry' hotkey='a' />
      </div>
      {commanding ? (
        <div className='ml-36 flex flex-row gap-1'>
          <p>
            <span className='bg-amber-400 text-neutral-900 rounded-lg p-1'>
              {!!action
                ? action.displayText
                : !!command
                ? `${command.displayText} ...`
                : ''}
            </span>
          </p>
          <Transition
            appear={true}
            show={!!action}
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
