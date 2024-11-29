import { useGlobalState } from '../hooks/hooks';
import AddBrand from './add-brand';

// Component for managing hotel brands
const ManageBrands = () => {
  const { brands, dispatch } = useGlobalState(); // Fetch brands and dispatch function from the custom hook

  // Function to delete a brand and remove it from associated hotels
  const deleteBrand = (brand: string) => {
    dispatch({ type: 'deleteBrand', brand });
  };

  return (
    <section className="mx-auto mb-8 max-w-md ~mt-8/16">
      <div>
        <h2 className="mb-6 font-semibold ~text-2xl/4xl">Manage Brands</h2>

        <div className="mb-5 mt-2" id="add-brand">
          {/* Component for adding a new brand */}
          <AddBrand />
        </div>

        <h3 className="font-medium ~text-xl/lg ~mb-2/3">All Brands</h3>
        <ol className="list-decimal ps-4 ~text-sm/base">
          {/* List of all brands with remove buttons */}
          {brands.map((brand: string) => (
            <li key={brand} className="border-b py-2 ps-2">
              {brand}

              <button
                onClick={() => deleteBrand(brand)}
                className="ms-5 rounded-full px-1.5 text-red-500"
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
