import { NextRequest, NextResponse } from 'next/server';
import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('../../../lib/firebase/firebase-key.json');

console.debug('---- JSON file:');
console.debug(serviceAccount);

const hardCodedServiceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
  universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
};

console.debug('---- HARD-CODED:');
console.debug(hardCodedServiceAccount);

export async function GET(req: NextRequest, res: NextResponse) {
  return NextResponse.json({ message: 'Under construction.' });
}

// firebaseAdmin.initializeApp({
//   credential: firebaseAdmin.credential.cert(serviceAccount),
//   databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
// });

// export async function GET(req: NextRequest, res: NextResponse) {
//   const username = req.nextUrl.searchParams.get('username');

//   if (!username) {
//     return NextResponse.json(
//       { message: 'No Username provided.' },
//       { status: 401 }
//     );
//   }

//   try {
//     const firebaseToken = await firebaseAdmin
//       .auth()
//       .createCustomToken(username);
//     console.debug(firebaseToken);
//   } catch (error) {
//     console.error(error);
//   }
// }
