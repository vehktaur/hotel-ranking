import { SubmitHandler, useForm } from 'react-hook-form';
import { Hotel } from '../lib/definitions';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { HotelsContext } from '../context/hotel-provider';
import { useContext } from 'react';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

const EditHotel = () => {
  const { id } = useParams();

  const context = useContext(HotelsContext);
  if (!context) {
    throw new Error('NestedComponent must be used within a HotelProvider');
  }
  const { hotels, dispatch } = context;

  const hotel = hotels.find((hotel) => hotel.id === id);
  const { register, handleSubmit, reset } = useForm<Hotel>({
    defaultValues: {
      id: hotel?.id,
      name: hotel?.name,
      city: hotel?.city,
      country: hotel?.country,
      address: hotel?.address,
      rating: hotel?.rating,
      review: hotel?.review
    }
  });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<Hotel> = (data) => {
    console.log(data);
    dispatch({ type: 'edit', newHotel: data });
    navigate(`/${hotel?.name}`);
  };

  console.log(hotel);
  return (
    <div className="p-5">
      <div className="max-w-md mx-auto">
        <Link
          className="flex items-center gap-2 font-medium ~text-base/lg"
          to={`/${hotel?.name}`}
        >
          <ChevronLeftIcon className="w-4" /> Back
        </Link>
        <h2 className="~text-xl/3xl font-bold text-center mx-auto ~mb-5/8">
          Edit Hotel
        </h2>

        <form className="~text-sm/base" onSubmit={handleSubmit(onSubmit)}>
          <div className="~space-y-2/4">
            <div className="grid gap-2">
              <label className="font-medium" htmlFor="name">
                Name <span className="text-red-500">*</span>
              </label>
              <input
                id="name"
                type="text"
                {...register('name', { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <label className="font-medium" htmlFor="city">
                City <span className="text-red-500">*</span>
              </label>
              <input
                id="city"
                type="text"
                {...register('city', { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <label className="font-medium" htmlFor="country">
                Country <span className="text-red-500">*</span>
              </label>
              <input
                id="country"
                type="text"
                {...register('country', { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <label className="font-medium" htmlFor="address">
                Address <span className="text-red-500">*</span>
              </label>
              <input
                id="address"
                type="text"
                {...register('address', { required: true })}
              />
            </div>
            <div className="grid gap-2">
              <label className="font-medium" htmlFor="address">
                Brand
              </label>
              <select id="address" {...register('brand', { required: true })}>
                <option value="Brand 1">Brand 1</option>
                <option value="Brand 2">Brand 2</option>
                <option value="Brand 3">Brand 3</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label className="font-medium" htmlFor="rating">
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
              <label className="font-medium" htmlFor="review">
                Review <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <textarea id="review" rows={3} {...register('review')} />
            </div>
          </div>

          <div className="mt-6">
            <button className="border border-[#333] hover:text-white hover:bg-[#333] transition-colors duration-300 px-6 py-2">
              Edit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditHotel;
