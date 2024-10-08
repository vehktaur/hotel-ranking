import { ChevronDownIcon } from '@heroicons/react/24/outline';

const BrandFilter = () => {
  return (
    <div className="flex gap-3 items-center">
      Brand:
      <div className="w-[8rem] py-1 px-3 border hover:border-[#333] rounded transition-colors duration-500">
        <button className="w-full flex justify-between items-center">
          All
          <ChevronDownIcon className='w-4' />
        </button>
      </div>
    </div>
  );
};
export default BrandFilter;
