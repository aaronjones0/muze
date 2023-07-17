'use client';

import FieldLabel from '@muze/components/FieldLabel/FieldLabel';
import Input from '@muze/components/Input/Input';
import LinkButton from '@muze/components/LinkButton/LinkButton';
import { useState } from 'react';

export default function Page() {
  const [shortTitle, setShortTitle] = useState('');
  const [fullTitle, setFullTitle] = useState('');

  return (
    <div className='flex flex-col gap-4'>
      <h1 className='pointer-events-none select-none text-3xl font-black text-neutral-500'>
        Add new TV Series
      </h1>
      <FieldLabel label='Full Title' required>
        <Input
          id='fullTitleInput'
          value={fullTitle}
          onChange={(e) => setFullTitle(e.target.value)}
        />
      </FieldLabel>
      <FieldLabel label='Short Title'>
        <Input
          id='shortTitleInput'
          value={shortTitle}
          onChange={(e) => setShortTitle(e.target.value)}
        />
      </FieldLabel>
      <div className='flex flex-row gap-4'>
        <LinkButton href='/tv-series' label='Save' hotkey='s' />
        <LinkButton href='/tv-series' label='Cancel' hotkey='c' />
      </div>
    </div>
  );
}
