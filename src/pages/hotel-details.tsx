import { useParams } from 'react-router-dom';
import { StarIcon } from '@heroicons/react/20/solid';
import Map from '../components/map';
import Options from '../components/options';
import { useContext } from 'react';
import { HotelsContext } from '../context/hotel-provider';

const HotelDetails = () => {
  const { name } = useParams();
  const id = name?.split('__').pop();

  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('NestedComponent must be used within a HotelProvider');
  }

  const { hotels } = context;

  const hotel = hotels.find((hotel) => hotel.id === id);

  console.log(id);

  if (!hotel) {
    return (
      <div className="py-12 text-center">
        <strong>Hotel not found</strong>
      </div>
    );
  }
  return (
    <div className="p-5">
      {/* Hotel Details Section */}
      <div className="max-w-7xl mx-auto ~mt-6/12">
        <div className="border p-5 rounded-lg border-[#666]">
          <div className="flex justify-between items-center ~mb-7/12">
            <h1 className="~text-2xl/4xl font-bold">{hotel.name}</h1>
            <Options id={hotel.id} />
          </div>
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
          <div className="flex items-center gap-1 my-4">
            <p className="~text-base/lg">Rating:</p>
            <span className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                  key={index}
                  className={`~w-4/5 ${index < Math.round(hotel.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </span>
            <span className="text-sm ml-2 tracking-wider">
              ({hotel.rating}/5)
            </span>
          </div>
          {/* Hotel Review */}
          <p className="~text-base/lg">
            <strong>Review:</strong> {hotel.review}
          </p>
        </div>

        {/* Map Section */}
        <div className="border p-5 rounded-lg border-[#666] mt-8">
          <h2 className="~text-lg/2xl font-bold mb-4">Location Map</h2>
          <Map address={hotel.address} name={hotel.name} />
        </div>
      </div>
    </div>
  );
};
export default HotelDetails;
