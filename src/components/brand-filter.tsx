import { useSearchParams } from 'react-router-dom';
import { useGlobalState } from '../hooks/hooks';

// Component for filtering hotels by brand
const BrandFilter = () => {
  const [_, setSearchParams] = useSearchParams(); // Use search params from the URL

  // Handles the change event for the brand selection
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    // Update search params based on selected brand
    value ? setSearchParams({ brand: value }) : setSearchParams('');
  };

  const {
    state: { brands },
  } = useGlobalState(); // Hook to get the available brands
  return (
    <form className="flex items-center gap-3">
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
