import { useContext, useState } from 'react';
import { HotelsContext } from '../context/hotel-provider';

const AddBrand = () => {
  const context = useContext(HotelsContext);
  const [newBrand, setNewBrand] = useState<string>();
  if (!context) {
    throw new Error('Component should be used within Hotel Provider');
  }

  const { dispatchBrands } = context;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newBrand && newBrand !== '') dispatchBrands({ type: 'add', newBrand });
  };
  return (
    <div>
      <form className="flex gap-2" onSubmit={onSubmit}>
        <input
          className="border-0 border-b-2 border-gray-200 px-0.5 focus:border-[#666] focus:ring-0 transition-colors duration-300"
          type="text"
          onChange={(event) => setNewBrand(event.target.value)}
        />

        <button className="border px-2 rounded">Add Brand</button>
      </form>
    </div>
  );
};
export default AddBrand;
