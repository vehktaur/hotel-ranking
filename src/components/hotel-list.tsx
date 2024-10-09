import { useContext } from 'react';
import HotelCard from './hotel-card';
import { HotelsContext } from '../context/hotel-provider';

const HotelList = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('NestedComponent must be used within a HotelProvider');
  }

  const { hotels } = context;
  const sortedHotels = hotels.sort((a, b) => b.rating - a.rating);
  return (
    <div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
        {sortedHotels.map((hotel) => (
          <HotelCard key={hotel.id} hotel={hotel} />
        ))}
      </div>
    </div>
  );
};
export default HotelList;
