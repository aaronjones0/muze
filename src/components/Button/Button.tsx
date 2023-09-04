export default function Button({ label }: { label: string }) {
  return <button className='rounded-full py-2 px-3 bg-neutral-900 text-neutral-50'>{label}</button>;
}
