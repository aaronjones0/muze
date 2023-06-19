'use client';

import { useState } from 'react';
import AppHeader from '../AppHeader/AppHeader';

export default function SomeComp({ onAddEntry }: { onAddEntry: () => void }) {
  const [s, setS] = useState('');

  return (
    <>
      <AppHeader
        command={s}
        onCommandChanged={(command) => setS(command)}
        onAddEntry={onAddEntry}
      />
      <p>{s}</p>
    </>
  );
}
