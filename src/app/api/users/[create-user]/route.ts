import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';
import { User } from '@muze/model/User';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const sanityWriteClient = useSanityWriteClient();

  // const user: User = JSON.parse(JSON.stringify(request.body));
  const data = await request.json();

  console.log(data);

  // if (!user) {
  //   return NextResponse.json(
  //     { error: 'Bad request: Could not parse request body to a User object.' },
  //     { status: 400 }
  //   );
  // }

  // if (user.profile_image_blob) {
  //   sanityWriteClient.assets
  //     .upload('image', user.profile_image_blob, {
  //       contentType: 'image',
  //       filename: user.profile_image_blob.name,
  //     })
  //     .then((document) => {
  //       console.log(document);
  //       sanityWriteClient
  //         .create({
  //           _type: 'user',
  //           full_name: user.full_name,
  //           first_name: user.first_name,
  //           middle_name: user.middle_name,
  //           last_name: user.last_name,
  //           username: user.username,
  //           email: user.email ?? '',
  //           profile_image: {
  //             _type: 'image',
  //             asset: {
  //               _type: 'reference',
  //               _ref: document._id,
  //             },
  //           },
  //         })
  //         .then((createdDocument) => {
  //           return NextResponse.json(createdDocument, { status: 201 });
  //         })
  //         .catch((reason) => {
  //           return NextResponse.json({ error: reason }, { status: 500 });
  //         });
  //     });
  // } else {
  //   sanityWriteClient
  //     .create({
  //       _type: 'user',
  //       full_name: user.full_name,
  //       first_name: user.first_name,
  //       middle_name: user.middle_name,
  //       last_name: user.last_name,
  //       username: user.username,
  //       email: user.email ?? '',
  //     })
  //     .then((createdDocument) => {
  //       return NextResponse.json(createdDocument, { status: 201 });
  //     })
  //     .catch((reason) => {
  //       return NextResponse.json({ error: reason }, { status: 500 });
  //     });
  // }
  // const spid = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  // const apiv = process.env.NEXT_PUBLIC_SANITY_API_VERSION;
  // const ds = process.env.NEXT_PUBLIC_SANITY_DATASET;
  // const url = `https://${spid}.api.sanity.io/v${apiv}/data/mutate/${ds}`;

  // const res = await fetch(url, {
  //   method: 'POST',
  //   headers: {
  //     'Content-Type': 'application/json',
  //     Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
  //   },
  //   body: JSON.stringify(request.body),
  // });

  // const data = await res.json();

  // return NextResponse.json(data);
}
