import { sanity } from '@muze/lib/sanity-client';
import { User } from '@muze/model/User';

export default function useUser() {
  const getUser = async (email: string): Promise<User[] | undefined> => {
    const users = await sanity.fetch(`*[_type == "user" && email == "${email}"]{
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
  };

  return getUser;
}
