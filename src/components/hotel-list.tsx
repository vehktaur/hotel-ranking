import { hotels } from '../lib/placeholder-data';
import HotelCard from './hotel-card';

const HotelList = () => {
  const sortedHotels = hotels.sort((a, b) => b.rating - a.rating);
  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {sortedHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
export default HotelList;
