import { useContext } from 'react';
import { HotelsContext } from '../context/hotel-provider';
import { reduce } from '../lib/utils';

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
        <h2 className="font-semibold ~text-2xl/4xl mb-6">All Brands</h2>

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
