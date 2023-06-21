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
        'bg-neutral-800/50 rounded-md px-1 py-0.5',
      ].join(' ')}
    >
      {children}
    </span>
  );
}
