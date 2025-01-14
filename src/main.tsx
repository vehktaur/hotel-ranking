import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import RootLayout from './layouts/layout.tsx';

//Pages import
import Home from './pages/home.tsx';
import AddHotel from './pages/add-hotel.tsx';
import ErrorPage from './pages/error-page.tsx';
import HotelDetails from './pages/hotel-details.tsx';
import EditHotel from './pages/edit-hotel.tsx';
import HotelProvider from './context/hotel-provider.tsx';

//Here we have the different routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/add-hotel',
        element: <AddHotel />,
      },
      {
        path: '/:name',
        element: <HotelDetails />,
      },
      {
        path: '/edit-hotel/:id',
        element: <EditHotel />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HotelProvider>
      <RouterProvider router={router} />
    </HotelProvider>
  </StrictMode>,
);
