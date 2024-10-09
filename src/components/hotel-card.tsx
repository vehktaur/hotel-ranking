import { StarIcon } from '@heroicons/react/20/solid';
import { Hotel } from '../lib/definitions';
import { Link } from 'react-router-dom';
import { MapPinIcon } from '@heroicons/react/16/solid';

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <Link className="block" to={`/${hotel.name}`}>
      <div className="h-full border border-[#ccc] hover:shadow-md cursor-pointer transition-all duration-500 rounded-xl px-5 py-6 ~text-sm/base">
        <div className="flex flex-col h-full justify-between gap-3">
          <h3 className="~text-lg/xl font-medium">{hotel.name}</h3>

          <p className="flex justify-between items-center gap-4">
            <span className="~text-xs/sm">{hotel.city}</span>{' '}
            <span className="~text-xs/sm">{hotel.country}</span>
          </p>

          <address className="text-sm flex items-center gap-2"><MapPinIcon className='w-4'/> {hotel.address}</address>

          <p className="flex justify-start">
            <span className="border px-2 py-1 rounded-lg ~text-xs/sm text-white bg-slate-700">
              {hotel.brand}
            </span>
          </p>

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
