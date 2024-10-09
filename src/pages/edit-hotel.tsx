import { SubmitHandler, useForm } from 'react-hook-form';
import { Hotel } from '../lib/definitions';
import { hotels } from '../lib/placeholder-data';
import { useParams } from 'react-router-dom';

const EditHotel = () => {
  const { id } = useParams();
  const hotel = hotels.find((hotel) => hotel.id === id);
  const { register, handleSubmit, reset } = useForm<Hotel>({
    defaultValues: {
      name: hotel?.name,
      city: hotel?.city,
      country: hotel?.country,
      address: hotel?.address,
      rating: hotel?.rating,
      review: hotel?.review
    }
  });

  const onSubmit: SubmitHandler<Hotel> = (data) => {
    console.log(data);
    reset();
  };

  console.log(hotel)
  return (
    <div className="p-5">
      <div className="max-w-md mx-auto">
        <h2 className="~text-xl/3xl font-bold ~mb-5/8 text-center">
          Edit Hotel
        </h2>
        <form className="~text-sm/base" onSubmit={handleSubmit(onSubmit)}>
          <div className="~space-y-2/4">
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
              <select id="address" {...register('brand', { required: true })}>
                <option value="">Brand 1</option>
                <option value="">Brand 2</option>
                <option value="">Brand 3</option>
              </select>
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

          <div className="mt-6">
            <button className="border border-[#333] hover:text-white hover:bg-[#333] transition-colors duration-300 px-6 py-2">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default EditHotel;
