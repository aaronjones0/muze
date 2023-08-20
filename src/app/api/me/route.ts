import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { firebaseApp } from '@muze/lib/firebase';
import { getFirestore } from 'firebase-admin/firestore';
import { getDownloadURL, getStorage } from 'firebase-admin/storage';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

const GET = withApiAuthRequired(
  async (req: NextApiRequest, res: NextApiResponse) => {
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
      const fileRef = storage
        .bucket()
        .file(`users/${auth0User.email}/kitmasked.png`);
      const fileUrl = await getDownloadURL(fileRef);

      // return res.end();
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
        profileImageUrl: fileUrl,
      });
    }
  }
);

export { GET };
