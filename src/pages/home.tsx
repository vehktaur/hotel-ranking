import BrandFilter from '../components/brand-filter';
import HotelList from '../components/hotel-list';

// Home component - main landing page for HotelRank
const Home = () => {
  return (
    <div className="px-5">
      <div className="mx-auto max-w-7xl ~py-6/12">
        {/* Welcome message and app description */}
        <div>
          <h1 className="text-center ~text-2xl/4xl">Welcome to HotelRank</h1>
          <p className="mx-auto max-w-[100ch] text-center text-sm ~mt-4/8 sm:text-base">
            Easily manage, rank, and organize your favourite hotels by brand.
            Add new hotels, update details, and filter by brands for a seamless
            experience. Your hotel data is safely stored and ready for you every
            time you return. Discover, organise, and rank with HotelRank!
          </p>
        </div>

        {/* Hotel list section with brand filtering */}
        <div className="~mt-8/12">
          <div className="flex flex-wrap-reverse items-center justify-between gap-4">
            <h2 className="font-medium ~text-lg/2xl">Your Favourite Hotels</h2>

            {/* Filter hotels by brand */}
            <BrandFilter />
          </div>

          {/* List of hotels */}
          <HotelList />
        </div>
      </div>
    </div>
  );
};
export default Home;
