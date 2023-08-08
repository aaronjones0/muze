import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { database, storage } from '../../../firebase';

const GET = withApiAuthRequired(async () => {
  const session = await getSession();

  if (!!session) {
    const auth0User = session.user;
    const firebaseUser = await database
      .collection('users')
      .where('email', '==', auth0User.email)
      .get();

    const firebaseUserData = firebaseUser.docs.map((user) => user.data());

    console.debug(auth0User);
    console.debug(firebaseUserData);

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
