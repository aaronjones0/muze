import { UserProvider } from '@auth0/nextjs-auth0/client';
import { inter } from '@muze/lib/fonts';
import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Muze',
  description: 'A library for what you love.',
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <UserProvider>
        <body
          className={[
            'bg-neutral-900 selection:bg-amber-400 selection:text-amber-900',
          ].join(' ')}
        >
          <Providers>
            <div className='bg-neutral-900 text-neutral-700 container mx-auto px-4 py-8 h-screen flex flex-col gap-4'>
              {children}
            </div>
          </Providers>
        </body>
      </UserProvider>
    </html>
  );
}
