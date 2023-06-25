'use client';

import { sanity } from '@muze/lib/sanity-client';

export default function Signup() {
  const signUpNewUser = (
    fullName?: string,
    firstName?: string,
    middleName?: string,
    lastName?: string,
    username?: string,
    email?: string,
    profilePhoto?: File
  ) => {
    sanity.create({
      _type: 'user',
      full_name: fullName,
      first_name: firstName,
      middle_name: middleName,
      last_name: lastName,
      username: username,
      email: email,
    });

    // fetch('/api/users/create-user', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     mutations: [
    //       {
    //         create: {
    //           _type: 'user',
    //           full_name: fullName,
    //           first_name: firstName,
    //           middle_name: middleName,
    //           last_name: lastName,
    //           username: username,
    //           email: email,
    //           // profile_image: profilePhoto,
    //         },
    //       },
    //     ],
    //   }),
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.error(error));
  };

  return signUpNewUser;
}
