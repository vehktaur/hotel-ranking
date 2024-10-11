import { StarIcon } from '@heroicons/react/20/solid';
import { Hotel } from '../lib/definitions';
import { Link } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/16/solid';

// Component for displaying hotel details in a card format
const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    // Link to the hotel details page
    <Link className="block" to={`/${hotel.name}__${hotel.id}`}>
      <div className="h-full cursor-pointer rounded-xl border border-[#ccc] px-5 py-6 transition-all duration-500 ~text-sm/base hover:shadow-md">
        <div className="flex h-full flex-col justify-between gap-3">
          <h3 className="font-medium ~text-lg/xl">{hotel.name}</h3>

          <p className="flex items-center justify-between gap-4">
            <span className="~text-xs/sm">{hotel.city}</span>{' '}
            <span className="~text-xs/sm">{hotel.country}</span>
          </p>

          <address className="flex items-center gap-2 text-sm">
            <MapPinIcon className="w-4" /> {hotel.address}
          </address>

          {hotel.brand && (
            <p className="flex justify-start">
              <span className="rounded-lg border bg-slate-700 px-2 py-1 text-white ~text-xs/sm">
                {hotel.brand}
              </span>
            </p>
          )}

          {/* Hotel rating display */}
          <p
            className="flex items-center justify-end gap-1"
            title={`${hotel.rating}/5`}
          >
            Rating:
            <span className="flex">
              {Array.from({ length: 5 }, (_, index) => (
                <StarIcon
                  key={index}
                  className={`w-4 ${index < Math.round(hotel.rating) ? 'text-yellow-500' : 'text-gray-300'}`}
                />
              ))}
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
};
export default HotelCard;
