import { SubmitHandler, useForm } from 'react-hook-form';
import { Hotel } from '../lib/definitions';

const AddHotel = () => {
  const { register, handleSubmit, reset } = useForm<Hotel>();

  const onSubmit: SubmitHandler<Hotel> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className="p-5">
      <div className="max-w-md mx-auto">
        <h2 className="~text-xl/3xl font-bold ~mb-5/8 text-center">
          Add A New Favourite Hotel
        </h2>
        <form className="~text-sm/base" onSubmit={handleSubmit(onSubmit)}>
          <div className="~space-y-2/4">
            <div className="grid gap-2">
              <label htmlFor="name">Name</label>
              <input id="name" type="text" {...register('name')} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="city">City</label>
              <input id="city" type="text" {...register('city')} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="country">Country</label>
              <input id="country" type="text" {...register('country')} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="address">Address</label>
              <input id="address" type="text" {...register('address')} />
            </div>
            <div className="grid gap-2">
              <label htmlFor="address">Brand</label>
              <select id="address" {...register('brand')}>
                <option value="">Brand 1</option>
                <option value="">Brand 2</option>
                <option value="">Brand 3</option>
              </select>
            </div>
            <div className="grid gap-2">
              <label htmlFor="rating">Rating</label>
              <input
                id="rating"
                type="number"
                placeholder="Rate out of 5"
                max={5}
                min={0}
                {...register('rating', {
                  valueAsNumber: true,
                  max: 5,
                  min: 0
                })}
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="review">Review</label>
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
export default AddHotel;
