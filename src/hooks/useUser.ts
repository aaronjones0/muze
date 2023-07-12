import { sanity } from '@muze/lib/sanity-client';
import { User } from '@muze/model/User';

export default async function useUser(id: string) {
  const users: User = await sanity.fetch(`*[_type == "user" && _id == "${id}"]{
        _id,
        _type,
        full_name,
        first_name,
        middle_name,
        last_name,
        username,
        email,
        "profile_image_url": profile_image.asset->url
      }`);

  return users;
}
