'use client';

import FrontDoor from '@muze/components/FrontDoor/FrontDoor';
import ProcessingIndicator from '@muze/components/ProcessingIndicator/ProcessingIndicator';
import { useSession } from 'next-auth/react';
import React from 'react';
import AuthContext from './AuthContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  // const [queryClient] = React.useState(() => new QueryClient());
  const { data: session, status } = useSession();

  if (status === 'loading') {
    return <ProcessingIndicator text='Processing' />;
  }

  if (status === 'unauthenticated') {
    <FrontDoor />;
  }

  if (status === 'authenticated') {
    if (!!session) {
      return (
        // <QueryClientProvider client={queryClient}>
        <AuthContext session={session}>{children}</AuthContext>
        // <ReactQueryDevtools initialIsOpen={false} />
        // </QueryClientProvider>
      );
    }
  }
}
