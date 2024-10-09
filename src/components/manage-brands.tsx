import { useBrands, useHotels } from '../hooks/hooks';
import AddBrand from './add-brand';

// Component for managing hotel brands
const ManageBrands = () => {
  const { brands, dispatchBrands } = useBrands(); // Fetch brands and dispatch function from the custom hook
  const { dispatchHotels } = useHotels(); // Fetch dispatch function for hotels

  // Function to delete a brand and remove it from associated hotels
  const deleteBrand = (brand: string) => {
    dispatchBrands({ type: 'delete', brand });
    dispatchHotels({ type: 'removeBrandFromHotels', brand });
  };

  return (
    <section className="max-w-md mx-auto ~mt-8/16 mb-8">
      <div>
        <h2 className="font-semibold ~text-2xl/4xl mb-6">Manage Brands</h2>

        <div className="mt-2 mb-5" id="add-brand">
          {/* Component for adding a new brand */}
          <AddBrand />
        </div>

        <h3 className="~text-xl/lg font-medium ~mb-2/3">All Brands</h3>
        <ol className="list-decimal ps-4 ~text-sm/base">
          {/* List of all brands with remove buttons */}
          {brands.map((brand: string) => (
            <li key={brand} className=" py-2 ps-2 border-b">
              {brand}

              <button
                onClick={() => deleteBrand(brand)}
                className=" ms-5 text-red-500 rounded-full px-1.5"
              >
                Remove
              </button>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
export default ManageBrands;
