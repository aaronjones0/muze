import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { firebaseApp } from '@muze/lib/firebase';
import { getFirestore } from 'firebase-admin/firestore';

const GET = withApiAuthRequired(async () => {
  const session = await getSession();

  if (!!session && !!firebaseApp) {
    const db = getFirestore(firebaseApp);
    const users = await db.collection('users').get();
    const usersData = users.docs.map((user) => user.data());
    return NextResponse.json(usersData);
  } else {
    if (!session) {
      return NextResponse.json({
        body: { error: 'No Auth0 Session.' },
        status: 500,
      });
    } else if (!firebaseApp) {
      return NextResponse.json({
        body: { error: 'Firebase is not initialized.' },
        status: 500,
      });
    }
  }
});

export { GET };
