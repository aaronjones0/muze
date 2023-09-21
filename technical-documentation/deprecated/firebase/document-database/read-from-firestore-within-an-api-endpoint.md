# Read from Firestore within an API endpoint

{% hint style="warning" %}
Do not access the Firestore database without securing the endpoint.

See [securing-an-api-endpoint.md](../../../auth0/securing-an-api-endpoint.md "mention") for details.
{% endhint %}

Import the initialized `firebaseApp` to get a connection to the database (`getFirestore()`).

Use the signed-in user's email address to access only that user's data.

{% hint style="warning" %}
Always use the email address that comes from the user object in the Auth0 Session when scoping Firestore and Storage data.

Auth0 is the source of truth for Account data.
{% endhint %}

```typescript
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
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

    return NextResponse.json({
      idEmail: auth0User.email,
      profileJoined: firebaseUserData[0].joined,
      profileEmail: firebaseUserData[0].email,
      profileUsername: firebaseUserData[0].username,
    });
  }
});

export { GET };

```
