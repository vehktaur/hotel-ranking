import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="p-5">
      <div className="mx-auto flex w-full justify-between items-center max-w-7xl">
        <h3 className="font-bold ~text-[1.1rem]/xl ">
          <Link to="/"> HotelRank</Link>
        </h3>

        <Link className='block border border-[#333] hover:bg-[#333] hover:text-white transition-colors duration-300 rounded-full ~px-2/4 ~py-1/2 ~text-[0.9rem]/base font-medium' to='/add-hotel'>Add Hotel</Link>
      </div>
    </nav>
  );
};
export default Navbar;
