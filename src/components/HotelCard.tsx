import { Hotel } from '../lib/definitions';

const HotelCard = ({ hotel }: { hotel: Hotel }) => {
  return (
    <div>
      <div className="h-full shadow hover:shadow-md cursor-pointer transition-all duration-500 rounded-xl px-5 py-6">
        <div className="flex flex-col h-full justify-between gap-3">
          <h3 className="~text-lg/xl font-medium">{hotel.name}</h3>

          <p className="flex justify-between items-center gap-4">
            <small>{hotel.city}</small> <small>{hotel.country}</small>
          </p>

          <address className="text-sm">{hotel.address}</address>

          <p className="flex justify-end">
            <span className="border px-2 py-1 rounded-lg ~text-xs/sm text-white bg-slate-700">
              {hotel.brand}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
