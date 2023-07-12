import { sanity } from '@muze/lib/sanity-client';

export default function useUserQuery() {
  const getUser = async (email: string) => {
    const user = sanity.fetch(`*[_type == "user" && email == "${email}"]{
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

    return user;
  };

  return getUser;
}
