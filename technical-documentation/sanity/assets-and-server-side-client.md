# Assets and Server-Side Client

## Server-Side Sanity Write Client

We import `server-only` to enforce keeping the Sanity Write Token (SWT) out of the client-side bundle so it remains secret, because the SWT is per-tenant and not per-user:

```typescript
// ~/src/hooks/useSanityWriteClient.ts

import 'server-only';
import { createClient } from 'next-sanity';

export default function useSanityWriteClient() {
  const sanityWrite = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
    token: process.env.SANITY_API_TOKEN, // ❗ Secret: Sanity Write Token
    useCdn: false,
  });

  return sanityWrite;
}
```

## NextJS API Route

The API route executes the post server-side:

```typescript
// ~/src/app/api/assets/[profile-image]/route.ts

import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const sanityWriteClient = useSanityWriteClient();

  request.arrayBuffer().then((buffer) => {
    sanityWriteClient.assets
      .upload('image', Buffer.from(buffer), { // ⬅️ Buffer.from(buffer) is necessary.
        contentType: 'image',
        filename: `${Date()}-ProfileImage`,
      })
      .then((document) => {
        console.log('.then((document)) => {})');
        console.log(document);
        return NextResponse.json({ status: 201 });
      })
      .catch((reason) => {
        console.log('.catch((reason) => {})');
        console.log(reason);
        return NextResponse.json(
          {
            error: reason,
          },
          {
            status: 500,
          }
        );
      });
  });
}
```

## Posting an asset to the API Route

The client-side posts via the NextJS API Route, keeping the SWT out of the client-side bundle so it isn't exposed:

```typescript
// Within any client component or page:

import { useState } from 'react';

const [profileImage, setProfileImage] = useState<Blob | null>(null);

return (
  {/* ... */}
  <input
    type='file'
    name='profileImageInput'
    onChange={(event) => {
      setProfileImage(
        event.target.files ? event.target.files[0] : null
      );
    }}
  />
  {/* ... */}
  <button
    onClick={async () => {
      if (!profileImage) {
        return;
      }
      
      try {
        // ⬇️️ NextJS API Route
        const response = await fetch(`/api/assets/profile-image`, {
          method: 'POST',
          headers: {
            // ⬇️ Data type of the request body
            'Content-Type': 'application/octet-stream',
          },
          /* ⬇️ We have to post profileImage.arrayBuffer(), because profileImage
           * contains the metadata of the image. The buffer is the binary data 
           * of the image itself.
           */
          body: await profileImage.arrayBuffer(),
        });
      
        const result = await response.json();
        console.log('Success:', result);
      } catch (error) {
        console.log(error);
      }
    }}>
    Upload Image
  </button>
  {/* ... */}
);
```