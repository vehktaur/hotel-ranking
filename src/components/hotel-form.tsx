import { useFormContext } from 'react-hook-form';
import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/24/outline';
import { useGlobalState } from '../hooks/hooks';
import AddressInput from './address-input';
import { useNavigate } from 'react-router-dom';
import { Hotel } from '../lib/definitions';

// Form component for adding or editing hotel details
const HotelForm = ({
  onSubmit,
  edit,
}: {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  edit?: boolean; // Flag to determine if this is an edit form
}) => {
  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext<Hotel>(); // Access form methods from context

  const {
    state: { brands },
  } = useGlobalState(); // Get brands from the custom hook
  const navigate = useNavigate(); //enable backwards navigation to details page

  return (
    <div className="mx-auto max-w-md">
      {/* Link to navigate back to the hotel details */}
      {edit && (
        <button
          onClick={() => navigate(-1)}
          className="mb-3 flex items-center gap-2 font-medium ~text-base/lg"
        >
          <ChevronLeftIcon className="w-4" /> Back
        </button>
      )}

      <h2 className="text-center font-bold ~text-xl/3xl ~mb-5/8">
        Add A New Favourite Hotel
      </h2>
      <form className="~text-sm/base" onSubmit={onSubmit}>
        <div className="~space-y-4/6">
          <div className="grid gap-2">
            <label htmlFor="name">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              {...register('name', { required: 'Hotel name is required' })}
              placeholder="e.g., Hotel Grand"
            />
            {errors.name?.message && (
              <p className="text-red-600 ~text-xs/sm">{errors.name.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="city">
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              {...register('city', { required: 'City is required' })}
              placeholder="e.g., London"
            />
            {errors.city?.message && (
              <p className="text-red-600 ~text-xs/sm">{errors.city.message}</p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              id="country"
              type="text"
              {...register('country', { required: 'Country is required' })}
              placeholder="e.g., United Kingdom"
            />
            {errors.country?.message && (
              <p className="text-red-600 ~text-xs/sm">
                {errors.country.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="address">
              Address <span className="text-red-500">*</span>
            </label>
            <AddressInput />
            {errors.address?.message && (
              <p className="text-red-600 ~text-xs/sm">
                {errors.address.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="address">Brand</label>
            <div className="flex flex-wrap rounded border border-[#6b7280] py-3 ~gap-x-1/2 ~gap-y-2/4 ~px-2/4">
              {/* Link to add new brand */}
              <a
                href="#add-brand"
                className="flex cursor-pointer items-center gap-1 rounded-full border border-[#666] py-2 font-medium transition-all duration-300 ~px-2.5/3 active:ring-1"
              >
                <PlusIcon className="w-4" />
                <span>Add new</span>
              </a>

              {/* Radio buttons for selecting existing brands */}
              {brands.map((brand, index) => (
                <label
                  className="flex cursor-pointer items-center gap-2 rounded-full border py-2 transition-all duration-300 ~px-2.5/4 has-[:checked]:bg-[#333] has-[:checked]:text-white"
                  key={index}
                >
                  <input
                    className="peer hidden"
                    type="radio"
                    value={brand}
                    {...register('brand')}
                  />

                  <span> {brand}</span>
                </label>
              ))}
              <button
                className="ms-3 rounded-full border px-3 py-0.5 text-red-700"
                type="button"
                onClick={() => setValue('brand', '')}
              >
                Clear
              </button>
            </div>
          </div>

          <div className="grid gap-2">
            <label htmlFor="rating">
              Rating <span className="text-red-500">*</span>
            </label>
            <input
              id="rating"
              type="number"
              placeholder="e.g., 4.5"
              max={5}
              step={0.1}
              min={0}
              {...register('rating', {
                required: 'Please provide a rating out of 5',
                valueAsNumber: true,
                max: 5,
                min: 0,
              })}
            />
            {errors.rating?.message && (
              <p className="text-red-600 ~text-xs/sm">
                {errors.rating.message}
              </p>
            )}
          </div>

          <div className="grid gap-2">
            <label htmlFor="review">
              Review <span className="text-xs text-gray-500">(optional)</span>
            </label>
            <textarea
              id="review"
              rows={3}
              {...register('review')}
              placeholder="Share your experience..."
            />
          </div>
        </div>

        {/* Submit button for the form */}
        <div className="~mt-6/8">
          <button className="border border-[#333] px-6 py-2 transition-colors duration-300 hover:bg-[#333] hover:text-white">
            {edit ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default HotelForm;
