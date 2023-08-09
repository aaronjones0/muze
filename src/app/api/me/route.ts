import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { getStorage } from 'firebase-admin/storage';
import { NextResponse } from 'next/server';
import { firebaseApp } from '@muze/lib/firebase';
import { getFirestore } from 'firebase-admin/firestore';

const GET = withApiAuthRequired(async () => {
  const session = await getSession();

  if (!!session && !!firebaseApp) {
    // Auth0
    const auth0User = session.user;

    // Firebase Firestore
    const db = getFirestore(firebaseApp);

    const firebaseUser = await db
      .collection('users')
      .where('email', '==', auth0User.email)
      .get();

    const firebaseUserData = firebaseUser.docs.map((user) => user.data());

    // Firebase Storage
    const storage = getStorage();
    console.debug(storage);
    // const imageRef = ref(storage, `users/${auth0User.email}/kitmasked.png`);
    // console.debug(imageRef);

    return NextResponse.json({
      idNickname: auth0User.nickname,
      idName: auth0User.name,
      idPicture: auth0User.picture,
      idUpdatedAt: auth0User.updated_at,
      idEmail: auth0User.email,
      idEmailVerified: auth0User.email_verified,
      profileJoined: firebaseUserData[0].joined,
      profileEmail: firebaseUserData[0].email,
      profileUsername: firebaseUserData[0].username,
    });
  }
});

export { GET };
