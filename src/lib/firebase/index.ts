import 'server-only';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

const serviceAccount = require('./firebase-key.json');

// const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT);
// admin.initializeApp({
//   credential: admin.credential.cert({
//     projectId: serviceAccount.project_id,
//     clientEmail: serviceAccount.client_email,
//     privateKey: serviceAccount.private_key.replace(/\\n/g, "\n"),
//   }),
// });

// const serviceAccount: any = {
//   type: process.env.FIREBASE_TYPE,
//   project_id: process.env.FIREBASE_PROJECT_ID,
//   private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
//   private_key: process.env.FIREBASE_PRIVATE_KEY,
//   client_email: process.env.FIREBASE_CLIENT_EMAIL,
//   client_id: process.env.FIREBASE_CLIENT_ID,
//   auth_uri: process.env.FIREBASE_AUTH_URI,
//   token_uri: process.env.FIREBASE_TOKEN_URI,
//   auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
//   client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL,
//   universe_domain: process.env.FIREBASE_UNIVERSE_DOMAIN,
// };

const firebaseConfig = {
  // credential: cert({
  //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  //   privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  // }),
  credential: cert(serviceAccount),
  // databaseURL: `https://${serviceAccount.projectId}.firebaseio.com`,
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  storageBucket: 'gs://muze-react.appspot.com',
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
