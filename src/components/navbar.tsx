import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between">
        <h3 className="font-bold ~text-[1.1rem]/xl">
          <Link to="/"> HotelRank</Link>
        </h3>

        <Link
          className="block rounded-full border border-[#333] font-medium transition-colors duration-300 ~text-[0.9rem]/base ~px-2/4 ~py-1/2 hover:bg-[#333] hover:text-white"
          to="/add-hotel"
        >
          Add Hotel
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;
