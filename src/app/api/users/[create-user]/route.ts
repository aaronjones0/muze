import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const sanityWriteClient = useSanityWriteClient();
  const newUser = await request.json();
  console.log(newUser);
  try {
    const user = await sanityWriteClient.create(newUser);
    return NextResponse.json(user);
  } catch (error) {
    console.error('Caught an error while trying to create a new user.');
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
