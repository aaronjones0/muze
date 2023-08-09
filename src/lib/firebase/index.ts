import 'server-only';
import { initializeApp, getApps, cert } from 'firebase-admin/app';

const serviceAccount = require('./firebase-key.json');

const firebaseConfig = {
  credential: cert(serviceAccount),
  databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
  storageBucket: 'gs://muze-react.appspot.com',
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
