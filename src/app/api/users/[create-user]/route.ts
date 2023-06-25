import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const spid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const apiv = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
  const ds = process.env.NEXT_PUBLIC_SANITY_DATASET;
  const url = `https://${spid}.api.sanity.io/v${apiv}/data/mutate/${ds}`;

  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(request.body),
  });

  const data = await res.json();

  return NextResponse.json(data);
}
