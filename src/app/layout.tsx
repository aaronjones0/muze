import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
    <html lang='en'>
      <body className={[inter.className, 'bg-neutral-900 text-neutral-700 h-full w-full'].join(' ')}>{children}</body>
    </html>
  );
}
