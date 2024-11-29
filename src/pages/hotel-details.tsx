import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
// import Map from '../components/map';
import Options from '../components/options';
import { useGlobalState } from '../hooks/hooks';
import CustomMap from '../components/map';

const HotelDetails = () => {
  const { name } = useParams();
  const id = name?.split('__').pop();

  const { hotels } = useGlobalState();

  const hotel = hotels.find((hotel) => hotel.id === id);

  if (!hotel) {
    return (
      <div className="py-12 text-center">
        <strong>Hotel Not Found</strong>
      </div>
    );
  }
  return (
    <div className="p-5">
      {/* Hotel Details Section */}
      <div className="mx-auto max-w-7xl ~mt-6/12">
        <div className="rounded-lg border border-[#666] p-5">
          {/* Hotel Name and Options */}
          <div className="flex items-center justify-between ~mb-7/12">
            <h1 className="font-bold ~text-2xl/4xl">{hotel.name}</h1>
            <Options id={hotel.id} />
          </div>

          {/* Hotel Information */}
          <div>
            <p className="~text-base/lg">
              <strong>Location:</strong> {hotel.city}, {hotel.country}
            </p>
            <p className="~text-base/lg">
              <strong>Address:</strong> {hotel.address}
            </p>
            <p className="~text-base/lg">
              <strong>Brand:</strong> {hotel.brand ? hotel.brand : 'None'}
            </p>
          </div>

          {/* Hotel Rating */}
          <div className="my-4 flex items-center gap-1">
            <p className="~text-base/lg">Rating:</p>
            <span className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                  key={index}
                  className={`~w-4/5 ${index < Math.round(hotel.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </span>
            <span className="ml-2 text-sm tracking-wider">
              ({hotel.rating}/5)
            </span>
          </div>

          {/* Hotel Review */}
          <p className="~text-base/lg">
            <strong>Review:</strong> {hotel.review}
          </p>
        </div>

        {/* Map Section */}
        <div className="mt-8 rounded-lg border border-[#666] p-5">
          <h2 className="mb-4 font-bold ~text-lg/2xl">Location Map</h2>
          <CustomMap address={hotel.address} name={hotel.name} />
        </div>
      </div>
    </div>
  );
};
export default HotelDetails;
