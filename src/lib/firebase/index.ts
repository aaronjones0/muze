import 'server-only';
import { cert, getApps, initializeApp } from 'firebase-admin/app';

// const serviceAccount = require('./firebase-key.json');

const serviceAccount: any = {
  type: 'service_account',
  project_id: 'muze-react',
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY,
  client_email: 'firebase-adminsdk-4rc4z@muze-react.iam.gserviceaccount.com',
  client_id: '112244917561998968493',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-4rc4z%40muze-react.iam.gserviceaccount.com',
  universe_domain: 'googleapis.com',
};

const firebaseConfig = {
  credential: cert(serviceAccount),
  databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
  storageBucket: 'gs://muze-react.appspot.com',
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
