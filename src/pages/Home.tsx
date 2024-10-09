import BrandFilter from '../components/brand-filter';
import HotelList from '../components/hotel-list';

const Home = () => {
  return (
    <div className="px-5">
      <div className="mx-auto max-w-7xl ~py-6/12">
        <div>
          <h1 className="text-center ~text-2xl/4xl">Welcome to HotelRank</h1>
          <p className="~mt-4/8 text-center max-w-[100ch] mx-auto text-sm sm:text-base">
            Easily manage, rank, and organize your favourite hotels by brand.
            Add new hotels, update details, and filter by brands for a seamless
            experience. Your hotel data is safely stored and ready for you every
            time you return. Discover, organise, and rank with HotelRank!
          </p>
        </div>

        <div className="~mt-8/12">
          <div className="flex justify-between items-center flex-wrap-reverse gap-4">
            <h2 className="~text-lg/2xl font-medium">Your Favourite Hotels</h2>

            <BrandFilter />
          </div>
          <HotelList />
        </div>
      </div>
    </div>
  );
};
export default Home;
