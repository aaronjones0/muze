// Anima
interface Props {
  className: any;
}

export const Avatar = ({ className }: Props): JSX.Element => {
  return (
    <div
      className={`w-14 h-14 rounded-full shadow-lg shadow-black border border-neutral-900 border-solid bg-clip-padding ${className}`}
    >
      {/* <div className='h-14 rounded-full border border-solid border-[color:var(--neutralneutral-900)]' /> */}
    </div>
  );
};
