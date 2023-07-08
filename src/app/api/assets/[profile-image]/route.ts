import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const sanityWriteClient = useSanityWriteClient();
  try {
    const buffer = await request.arrayBuffer();
    const img = await sanityWriteClient.assets.upload(
      'image',
      Buffer.from(buffer),
      {
        contentType: 'image',
        filename: `${Date()}-ProfileImage`,
      }
    );
    return NextResponse.json(img);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
