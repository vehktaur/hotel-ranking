import HotelCard from './hotel-card';
import { useSearchParams } from 'react-router-dom';
import { useGlobalState } from '../hooks/hooks';

// Component for displaying a list of hotels
const HotelList = () => {
  // Fetch hotels and search parameters
  const {
    state: { hotels },
  } = useGlobalState();
  const [searchParams] = useSearchParams();

  // Get the selected brand from the search parameters
  const brandFilter = searchParams.get('brand');

  // Filter hotels based on the selected brand
  const filteredHotels = brandFilter
    ? hotels.filter((hotel) => hotel.brand === brandFilter)
    : hotels;

  // Sort hotels by rating in descending order
  const sortedHotels = filteredHotels.sort((a, b) => b.rating - a.rating);
  return (
    <div className="pt-4">
      {/* Render hotel cards if hotels are available */}
      {sortedHotels && sortedHotels.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {sortedHotels &&
            sortedHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
        </div>
      ) : (
        // Display message if no hotels found
        <p className="my-12 ~text-base/lg">
          <strong>No Hotels Found</strong>
        </p>
      )}
    </div>
  );
};
export default HotelList;
