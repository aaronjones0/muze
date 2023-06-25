'use client';

// import { roboto_mono } from '@muze/lib/fonts';
import { ChangeEventHandler } from 'react';

export default function Input({
  label,
  value,
  onChange,
  readOnly,
  disabled,
  required,
}: {
  label?: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  readOnly?: boolean;
  disabled?: boolean;
  required?: boolean;
}) {
  return (
    <label className='flex flex-col gap-1'>
      <div className='flex flex-row items-center gap-2'>
        <span className='pl-3 text-neutral-500'>{label}</span>
        {required ? (
          <>
            <span className='font-black text-2xl text-amber-500 leading-3'>
              *
            </span>
          </>
        ) : null}
      </div>
      <div
        className={[
          'rounded-full',
          'px-3 py-2 h-min w-full',
          disabled ? '' : 'shadow-inner shadow-black',
          disabled ? '' : 'border-b-2 border-r border-neutral-800',
        ].join(' ')}
      >
        <input
          type='text'
          className={[
            'peer bg-neutral-900 outline-none w-full',
            // `${roboto_mono.className}`,
            'text-neutral-500',
          ].join(' ')}
          value={value}
          onChange={onChange}
          readOnly={readOnly}
          disabled={disabled}
        />
      </div>
    </label>
  );
}
