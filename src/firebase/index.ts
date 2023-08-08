// import { initializeApp } from 'firebase/app';
import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('./firebase-key.json');

// const app = initializeApp({
//   credential: firebaseAdmin.credential.cert(serviceAccount),
//   databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
//   storageBucket: 'gs://muze-react.appspot.com',
// });
if (!firebaseAdmin.apps.length) {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
      storageBucket: 'gs://muze-react.appspot.com',
    });
  } catch (error) {
    console.error('Failed to initialize Firestore.', error);
  }
}

export const database = firebaseAdmin.firestore();
export const storage = firebaseAdmin.storage();
