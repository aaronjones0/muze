import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const sanityWriteClient = useSanityWriteClient();

  console.log('request.body:');
  console.log(request.body);

  request.arrayBuffer().then((buffer) => {
    sanityWriteClient.assets
      .upload('image', Buffer.from(buffer), {
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
