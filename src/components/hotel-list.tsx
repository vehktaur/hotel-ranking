import { useContext } from 'react';
import HotelCard from './hotel-card';
import { HotelsContext } from '../context/hotel-provider';
import { useSearchParams } from 'react-router-dom';

const HotelList = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('NestedComponent must be used within a HotelProvider');
  }

  const { hotels } = context;
  const [searchParams] = useSearchParams();

  const brandFilter = searchParams.get('brand');

  const filteredHotels = brandFilter
    ? hotels.filter((hotel) => hotel.brand === brandFilter)
    : hotels;
  const sortedHotels = filteredHotels.sort((a, b) => b.rating - a.rating);
  return (
    <div className="pt-4">
      {sortedHotels && sortedHotels.length > 0 ? (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {sortedHotels &&
            sortedHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
      ) : (
        <p className='my-12 ~text-base/lg'>
          <strong>No Hotels Found</strong>
        </p>
      )}
    </div>
  );
};
export default HotelList;
