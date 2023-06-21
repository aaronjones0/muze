'use client';

import { useState } from 'react';

export default function Switch({
  isOn,
  onStateChanged,
  readOnly,
}: {
  isOn: boolean;
  onStateChanged?: (isOn: boolean) => void;
  readOnly?: boolean;
}) {
  const [on, setOn] = useState(isOn);

  return (
    <div
      onClick={() => {
        if (!readOnly) {
          setOn(!on);
          if (!!onStateChanged) {
            onStateChanged(!on);
          }
        }
      }}
      className='cursor-pointer h-10 w-20 rounded-full bg-neutral-900 shadow-inner shadow-black/90 border-b-2 border-r border-neutral-800 p-1'
    >
      <div
        className={[
          on
            ? 'bg-amber-500 border-amber-400 translate-x-10'
            : 'bg-neutral-900 border-neutral-800 translate-x-0',
          'h-8 w-8 rounded-full shadow-ns-md border-t-2 border-l transition-all',
          'flex justify-center items-center',
        ].join(' ')}
      ></div>
    </div>
  );
}
