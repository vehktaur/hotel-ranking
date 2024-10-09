import { useContext } from 'react';
import { HotelsContext } from '../context/hotel-provider';
import { reduce } from '../lib/utils';
import AddBrand from './add-brand';

const ManageBrands = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('Component is not within the Hotels Provider');
  }

  const { brands, dispatchBrands, dispatchHotels } = context;

  const deleteBrand = (brand: string) => {
    dispatchBrands({ type: 'delete', brand });
    dispatchHotels({ type: 'removeBrandFromHotels', brand });
  };

  return (
    <section className="max-w-md mx-auto ~mt-8/16 mb-8">
      <div>
        <h2 className="font-semibold ~text-2xl/4xl mb-6">Manage Brands</h2>

        <div className="mt-2 mb-5" id="add-brand">
          <AddBrand />
        </div>

        <h3 className="~text-xl/lg font-medium ~mb-2/3">All Brands</h3>
        <ol className="list-decimal ps-4 ~text-sm/base">
          {reduce(brands).map((brand: string) => (
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
