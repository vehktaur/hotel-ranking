import { hotels } from '../lib/placeholder-data';
import HotelCard from './HotelCard';

const HotelList = () => {
  return (
    <div className="p-5 ~mt-8/12">
      <div className="mx-auto max-w-7xl">
        <h2 className="~text-lg/2xl font-medium">All Hotels</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
          {hotels.map((hotel) => (
            <HotelCard hotel={hotel} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default HotelList;
