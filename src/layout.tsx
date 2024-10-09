import { Outlet } from 'react-router-dom';
import Navbar from './components/navbar';
import Footer from './components/footer';

function RootLayout() {
  return (
    <>
      <Navbar />
      <div className="min-h-[75vh]">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default RootLayout;
