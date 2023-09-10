// Anima
import Image from 'next/image';
import PropTypes from 'prop-types';

interface Props {
  text: string;
  className: any;
  backgroundClassName: any;
}

export const SearchBox = ({
  text = 'Search Text',
  className,
  backgroundClassName,
}: Props): JSX.Element => {
  return (
    <div
      className={`inline-flex items-center gap-2.5 pl-2 pr-4 py-2.5 relative shadow-[var(--ds-light)] ${className}`}
    >
      <div
        className={`absolute w-[158px] h-12 top-0 left-0 bg-[color:var(--neutralneutral-900-25)] rounded-full border border-solid border-[color:var(--neutralneutral-900)] backdrop-blur-xl backdrop-brightness-[100%]  shadow-[var(--bg-blur)] ${backgroundClassName}`}
      />
      <Image
        width={40}
        height={40}
        className='relative'
        alt='Search'
        src='/search.png'
      />
      <div className="relative w-fit [font-family:'Inter-Regular',_Helvetica] font-normal text-white text-4 tracking-[0] leading-[normal] whitespace-nowrap">
        {text}
      </div>
    </div>
  );
};

SearchBox.propTypes = {
  text: PropTypes.string,
  search: PropTypes.string,
};
