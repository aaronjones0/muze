import UserSignupForm from '@muze/components/UserSignupForm/UserSignupForm';
import useSanityWriteClient from '@muze/hooks/useSanityWriteClient';

export default function Page({
  searchParams,
}: {
  searchParams?: { email: string | undefined; username: string | undefined };
}) {
  const sanityWriteClient = useSanityWriteClient(process.env.SANITY_API_TOKEN ?? '');

  return (
    <UserSignupForm
      email={searchParams?.email ?? ''}
      username={searchParams?.username ?? ''}
      onSubmit={(
        fullName,
        firstName,
        middleName,
        lastName,
        username,
        profileImage
      ) => {}}
    />
  );
}
