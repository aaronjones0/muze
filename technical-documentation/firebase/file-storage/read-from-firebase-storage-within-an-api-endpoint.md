# Read from Firebase Storage within an API endpoint

{% hint style="warning" %}
Do not access the Firestore database without securing the endpoint.

See [securing-an-api-endpoint.md](../../auth0/securing-an-api-endpoint.md "mention") for details.
{% endhint %}

Import the initialized `firebaseApp` to get a connection to the storage tenant (`getStorage()`).

Use the signed-in user's email address to access only that user's data.

{% hint style="warning" %}
Always use the email address that comes from the user object in the Auth0 Session when scoping Firestore and Storage data.

Auth0 is the source of truth for Account data.
{% endhint %}

```typescript
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { getDownloadURL, getStorage } from 'firebase-admin/storage';
import { NextResponse } from 'next/server';
import { firebaseApp } from '@muze/lib/firebase';

const GET = withApiAuthRequired(async () => {
  const session = await getSession();

  if (!!session && !!firebaseApp) {
    // Auth0
    const auth0User = session.user;

    // Firebase Storage
    const storage = getStorage();
    const fileRef = storage
      .bucket()
      .file(`users/${auth0User.email}/kitmasked.png`);
    const fileUrl = await getDownloadURL(fileRef);

    return NextResponse.json({
      idEmail: auth0User.email,
      profileImageUrl: fileUrl,
    });
  }
});

export { GET };

```
