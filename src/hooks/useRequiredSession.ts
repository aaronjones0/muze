'use client';

import { signIn, useSession } from 'next-auth/react';

export default function useRequiredSession() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });

  return { session, status };
}
