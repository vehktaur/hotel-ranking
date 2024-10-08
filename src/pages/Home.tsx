import HotelList from '../components/HotelList';

const Home = () => {
  return (
    <div className="px-5">
      <div className="mx-auto max-w-7xl ~py-6/12">
        <h1 className="text-center ~text-2xl/4xl">Welcome to HotelRank</h1>

        <HotelList />
      </div>
    </div>
  );
};
export default Home;
