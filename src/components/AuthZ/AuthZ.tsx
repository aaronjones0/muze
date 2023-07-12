'use client';

import { sanity } from '@muze/lib/sanity-client';
import { User } from '@muze/model/User';

export default async function AuthZ({ email }: { email: string }) {
  const user = await getUsers(email);

  if (!!user) {
    return (
      <ul>
        <li>{user._id}</li>
        <li>{user.email}</li>
        <li>{user.first_name}</li>
        <li>{user.middle_name}</li>
        <li>{user.last_name}</li>
        <li>{user.full_name}</li>
        <li>{user.username}</li>
      </ul>
    );
  } else {
    return <p>{`No Users found with the email address "${email}".`}</p>;
  }
}

async function getUsers(email: string): Promise<User | undefined> {
  const users = await sanity.fetch(`*[_type == "user" && email == "${email}"]`);

  if (!!users && users[0]) {
    return users[0];
  } else {
    return users;
  }
}
