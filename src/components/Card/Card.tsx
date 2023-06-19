import Link from 'next/link';

export default function Card({
  title,
  description,
  href,
  className,
}: {
  title: string;
  description: string;
  href?: string;
  className?: string;
}) {
  return (
    <div className={['group rounded-3xl shadow-nh-md border-t-2 border-neutral-700', className].join(' ')}>
      {href ? (
        <Link href={href} className='w-full h-full'>
          <CardContent title={title} description={description} />
        </Link>
      ) : (
        <CardContent title={title} description={description} />
      )}
    </div>
  );

  function CardContent({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    return (
      <div className='h-full w-full rounded-3xl shadow-ns-md overflow-hidden p-4 pointer-events-none'>
        <h1 className='select-none pointer-events-none text-2xl font-black text-neutral-400 group group-hover:text-neutral-300'>{title}</h1>
        <p className='select-none pointer-events-none text-neutral-400 group-hover:text-neutral-300 text-ellipsis overflow-hidden'>{description}</p>
      </div>
    );
  }
}
