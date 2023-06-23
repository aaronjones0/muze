import Image from 'next/image';
import Link from 'next/link';

export default function FrontDoor() {
  return (
    <>
      <div className='flex flex-col justify-center items-center gap-16'>
        <h1 className='text-[100px] font-black text-neutral-900 drop-shadow-[0_4px_6px_-1px_rgb(245,158,11)]'>
          Muze
        </h1>
        <Image
          src='/MuzeTextLogo_v2.png'
          alt='Muze Logo'
          height={963}
          width={484}
        />
        <Link href='/api/auth/signin' className='group'>
          <div className='cursor-pointer h-12 w-52 rounded-2xl bg-neutral-900 relative flex items-center justify-center border-t-2 border-l border-neutral-800'>
            <p className='text-amber-500/90 group-hover:text-amber-500 font-black transition-colors'>
              Enter
            </p>
            <div className='rounded-2xl absolute top-0 bottom-0 left-0 right-0 shadow-md shadow-amber-500 animate-pulse flex flex-row items-center justify-center'></div>
          </div>
        </Link>
        {/* <Link href='/api/auth/sign-up' className='group'>
          <div className='shadow-nh-md rounded-2xl h-12 w-52'>
            <div className='h-full w-full shadow-ns-md rounded-2xl flex items-center justify-center'>
              <p className='text-neutral-700 group-hover:text-neutral-400 font-black transition-colors'>
                Sign up
              </p>
            </div>
          </div>
        </Link> */}
      </div>
    </>
  );
}
