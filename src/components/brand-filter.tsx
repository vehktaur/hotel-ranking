import { useSearchParams } from 'react-router-dom';
import { useBrands } from '../hooks/hooks';

const BrandFilter = () => {
  const [_, setSearchParams] = useSearchParams();

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    value ? setSearchParams({ brand: value }) : setSearchParams('');
  };

  const { brands } = useBrands();
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
