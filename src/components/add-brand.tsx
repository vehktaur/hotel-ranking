import { useState } from 'react';
import { useBrands } from '../hooks/hooks';

const AddBrand = () => {
  // State to store the new brand
  const [newBrand, setNewBrand] = useState<string>('');

  // Hook to manage brand state
  const { dispatchBrands } = useBrands();

  // Handles form submission to add a new brand
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newBrand && newBrand !== '') {
      dispatchBrands({ type: 'add', newBrand }); // Dispatch action to add the brand
    }
    setNewBrand(''); // Reset the input field
  };
  return (
    <div>
      <form className="flex gap-2" onSubmit={onSubmit}>
        <input
          className="border-0 border-b-2 border-gray-200 px-0.5 transition-colors duration-300 focus:border-[#666] focus:ring-0"
          type="text"
          onChange={(event) => setNewBrand(event.target.value)}
          value={newBrand}
          placeholder="Enter brand name"
        />

        <button type="submit" className="rounded border px-2">
          Add Brand
        </button>
      </form>
    </div>
  );
};
export default AddBrand;
