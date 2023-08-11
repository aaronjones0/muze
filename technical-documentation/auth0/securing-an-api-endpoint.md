# Securing an API endpoint

```typescript
import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

const GET = withApiAuthRequired(async () => {
  const session = await getSession();

  if (!!session) {
    const auth0User = session.user;

    return NextResponse.json({
      idNickname: auth0User.nickname,
      idName: auth0User.name,
      idPicture: auth0User.picture,
      idUpdatedAt: auth0User.updated_at,
      idEmail: auth0User.email,
      idEmailVerified: auth0User.email_verified,
    });
  }
});

export { GET };
```

Wrap the endpoint with `withApiAuthRequired()` to secure the endpoint with the Auth0 tenant.

Use the `getSession()` hook within the method to use session data (e.g. the signed-in user's account object).
