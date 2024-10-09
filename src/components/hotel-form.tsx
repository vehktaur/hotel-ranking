import { useFormContext } from 'react-hook-form';
import { Hotel } from '../lib/definitions';
import { HotelsContext } from '../context/hotel-provider';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeftIcon, PlusIcon } from '@heroicons/react/24/outline';

const HotelForm = ({
  onSubmit,
  edit,
  hotel
}: {
  onSubmit: React.FormEventHandler<HTMLFormElement> | undefined;
  edit?: boolean;
  hotel?: Hotel;
}) => {
  const { register, resetField } = useFormContext();

  const context = useContext(HotelsContext);
  if (!context) {
    throw new Error('NestedComponent must be used within a HotelProvider');
  }
  const { brands } = context;

  return (
    <div className="max-w-md mx-auto">
      {edit && (
        <Link
          className="flex items-center gap-2 font-medium ~text-base/lg"
          to={`/${hotel?.name}__${hotel?.id}`}
        >
          <ChevronLeftIcon className="w-4" /> Back
        </Link>
      )}

      <h2 className="~text-xl/3xl font-bold ~mb-5/8 text-center">
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
              {...register('name', { required: true })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="city">
              City <span className="text-red-500">*</span>
            </label>
            <input
              id="city"
              type="text"
              {...register('city', { required: true })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="country">
              Country <span className="text-red-500">*</span>
            </label>
            <input
              id="country"
              type="text"
              {...register('country', { required: true })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="address">
              Address <span className="text-red-500">*</span>
            </label>
            <input
              id="address"
              type="text"
              {...register('address', { required: true })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="address">Brand</label>
            <div className="flex flex-wrap rounded border border-[#6b7280] ~px-2/4 py-3 ~gap-x-1/2 ~gap-y-2/4">
              <a
                href="#add-brand"
                className="flex cursor-pointer items-center gap-1 rounded-full border border-[#666] py-2 font-medium transition-all duration-300 ~px-2.5/3 active:ring-1"
              >
                <PlusIcon className="w-4" />
                <span>Add new</span>
              </a>
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
                className="ms-3 px-3 py-0.5 rounded-full border text-red-700"
                type="button"
                onClick={() => resetField('brand')}
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
              placeholder="Rate out of 5"
              max={5}
              min={0}
              {...register('rating', {
                required: true,
                valueAsNumber: true,
                max: 5,
                min: 0
              })}
            />
          </div>
          <div className="grid gap-2">
            <label htmlFor="review">
              Review <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <textarea id="review" rows={3} {...register('review')} />
          </div>
        </div>

        <div className="~mt-6/8">
          <button className="border border-[#333] hover:text-white hover:bg-[#333] transition-colors duration-300 px-6 py-2">
            {edit ? 'Edit' : 'Add'}
          </button>
        </div>
      </form>
    </div>
  );
};
export default HotelForm;
