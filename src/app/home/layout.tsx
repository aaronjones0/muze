import { Session } from 'next-auth';
import { headers } from 'next/headers';
import AuthContext from '../AuthContext';

async function getSession(cookie: string): Promise<Session> {
  const response = await fetch('http://localhost:3000/api/auth/session', {
    headers: {
      cookie,
    },
  });

  const session = await response.json();

  return Object.keys(session).length > 0 ? session : null;
}

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession(headers().get('cookie') ?? '');

  return <p>Home</p>;
}
