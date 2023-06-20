import { roboto_mono } from '@muze/lib/fonts';

export default function C({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <span
      className={[
        roboto_mono.className,
        'bg-neutral-800/50 rounded-md p-1',
      ].join(' ')}
    >
      {children}
    </span>
  );
}
