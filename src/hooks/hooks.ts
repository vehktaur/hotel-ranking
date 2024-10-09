import { useContext } from 'react';
import { HotelsContext } from '../context/hotel-provider';

// Hook to access hotels-related state and actions
export const useHotels = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('useHotels must be used within a HotelProvider');
  }

  const { hotels, dispatchHotels } = context;
  return { hotels, dispatchHotels };
};

// Hook to access brands-related state and actions
export const useBrands = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('useBrands must be used within a HotelProvider');
  }

  const { brands, dispatchBrands } = context;
  return { brands, dispatchBrands };
};
