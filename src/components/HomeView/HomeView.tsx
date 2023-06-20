'use client';

import { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';

export default function HomeView() {
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
