// Anima
import Image from 'next/image';

export const SettingsButton = ({
  className,
}: {
  className: string;
}): JSX.Element => {
  return (
    <div
      className={[
        'flex w-14 h-14 items-start gap-2.5 relative shadow-lg shadow-black bg-neutral-900/25 rounded-full border border-solid border-neutral-900 backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {/* <div className='relative flex-1 self-stretch grow backdrop-brightness-[100%]  shadow-[var(--bg-blur)]' /> */}
      <Image
        width={48}
        height={48}
        className='absolute top-1 left-1'
        alt='Settings'
        src='/settings.png'
      />
    </div>
  );
};
