import firebaseAdmin from 'firebase-admin';

const serviceAccount = require('../firebase-key.json');

if (!firebaseAdmin.apps.length) {
  try {
    firebaseAdmin.initializeApp({
      credential: firebaseAdmin.credential.cert(serviceAccount),
      databaseURL: `https://${serviceAccount.project_id}.firebaseio.com`,
    });
  } catch (error) {
    console.error('Failed to initialize Firestore.', error);
  }
}

export default firebaseAdmin.firestore();
