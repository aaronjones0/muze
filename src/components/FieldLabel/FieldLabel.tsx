'use client';

export default function FieldLabel({
  children,
  label,
  required,
}: {
  children: React.ReactNode;
  label: string;
  required?: boolean;
}) {
  return (
    <label className='flex flex-col w-full'>
      <div className='flex flex-row items-center gap-2 pl-3'>
        <span className='text-neutral-500'>{label}</span>
        {required ? (
          <>
            <span className='font-black text-2xl text-amber-500 leading-3'>
              *
            </span>
          </>
        ) : (
          ''
        )}
      </div>
      {children}
    </label>
  );
}
