import { NextResponse } from 'next/server';

export async function POST(newUser: { full_name: string; email: string }) {
  const res = await fetch('https://data.mongodb-api.com/...', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_KEY}`,
    },
    body: JSON.stringify({
      mutations: [
        {
          create: newUser,
        },
      ],
    }),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
