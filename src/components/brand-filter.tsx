import { useContext } from 'react';
import { HotelsContext } from '../context/hotel-provider';
import { useSearchParams } from 'react-router-dom';

const BrandFilter = () => {
  const context = useContext(HotelsContext);
  const [_, setSearchParams] = useSearchParams();

  if (!context) {
    throw new Error('Component must be within HotelProvider');
  }

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    value ? setSearchParams({ brand: value }) : setSearchParams('');
  };

  const { brands } = context;
  return (
    <form className="flex gap-3 items-center">
      <label htmlFor="brandFilter">Brand:</label>

      <select
        onChange={handleChange}
        className="py-1.5"
        name="brandFilter"
        id="brandFilter"
      >
        <option value="">All</option>
        {brands.map((brand) => (
          <option key={brand} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </form>
  );
};
export default BrandFilter;
