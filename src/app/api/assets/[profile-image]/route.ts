import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const sanityWriteClient = useSanityWriteClient();

  try {
    const buffer = await request.arrayBuffer();

    // request.arrayBuffer().then((buffer) => {
    const img = await sanityWriteClient.assets.upload(
      'image',
      Buffer.from(buffer),
      {
        contentType: 'image',
        filename: `${Date()}-ProfileImage`,
      }
    );

    console.log('Logging img:');
    console.log(img);

    return NextResponse.json(img);
    // .then((document) => {
    //   console.log('.then((document)) => {})');
    //   console.log(document);
    //   return NextResponse.json(document);
    // })
    // .catch((reason) => {
    //   console.log('.catch((reason) => {})');
    //   console.log(reason);
    //   return NextResponse.json(
    //     {
    //       error: reason,
    //     },
    //     {
    //       status: 500,
    //     }
    //   );
    // });
    // });
  } catch (error) {
    console.log('Caught error.');
    console.log(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
