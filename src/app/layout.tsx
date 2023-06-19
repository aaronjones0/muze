// import { Inter, Roboto_Mono } from 'next/font/google';
import { inter } from '@muze/lib/fonts';
import './globals.css';

// const inter = Inter({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-inter',
// });

// export const roboto_mono = Roboto_Mono({
//   subsets: ['latin'],
//   display: 'swap',
//   variable: '--font-roboto-mono',
// });

export const metadata = {
  title: 'Muze',
  description: 'Muze',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <body
        className={[
          // inter.className,
          'bg-neutral-900 selection:bg-amber-400 selection:text-amber-900',
        ].join(' ')}
      >
        <div className='bg-neutral-900 text-neutral-700 container mx-auto py-8 h-screen flex flex-col gap-4'>
          {children}
        </div>
      </body>
    </html>
  );
}
