export default async function Page({ params }: { params: { type: string } }) {
  return <p>{params.type} Collection</p>;
}
