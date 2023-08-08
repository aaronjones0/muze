import { NextRequest, NextResponse } from 'next/server';
import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('../../../firebase/firebase-key.json');

// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(serviceAccount),
//   databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
// });

export async function GET(req: NextRequest, res: NextResponse) {
  const username = req.nextUrl.searchParams.get('username');

  if (!username) {
    return NextResponse.json(
      { message: 'No Username provided.' },
      { status: 401 }
    );
  }

  try {
    const firebaseToken = await firebaseAdmin
      .auth()
      .createCustomToken(username);
    console.debug(firebaseToken);
  } catch (error) {
    console.error(error);
  }
}
