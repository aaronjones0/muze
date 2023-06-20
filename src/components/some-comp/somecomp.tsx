'use client';

import { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';

export default function SomeComp() {
  const [s, setS] = useState('');

  return (
    <>
      <AppHeader
        commandBarValue={s}
        onCommandChanged={(command) => setS(command)}
      />
    </>
  );
}
