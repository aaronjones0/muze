// import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';
import { headers } from 'next/headers';
import AuthContext from './AuthContext';
// import { Inter, Roboto_Mono } from 'next/font/google';
import { inter } from '@muze/lib/fonts';
import './globals.css';
import Providers from './providers';

export const metadata = {
  title: 'Muze',
  description: 'A library for what you love.',
};

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch('http://localhost:3000/api/auth/session', {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get('cookie') ?? '');

  return (
    <html lang='en' className={inter.className}>
      <body
        className={[
          // inter.className,
          'bg-neutral-900 selection:bg-amber-400 selection:text-amber-900',
        ].join(' ')}
      >
        <AuthContext session={session}>
          <Providers>
            <div className='bg-neutral-900 text-neutral-700 container mx-auto px-4 py-8 h-screen flex flex-col gap-4'>
              {children}
            </div>
          </Providers>
        </AuthContext>
      </body>
    </html>
  );
}
