import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';
import { database } from '../../../firebase';

const GET = withApiAuthRequired(async () => {
  const session = await getSession();

  const users = await database.collection('users').get();
  const usersData = users.docs.map((user) => user.data());
  return NextResponse.json(usersData);
});

export { GET };
// export async function GET(req: NextRequest, res: NextResponse) {
//   const users = await database.collection('users').get();
//   const usersData = users.docs.map((user) => user.data());
//   return NextResponse.json(usersData);
// };
