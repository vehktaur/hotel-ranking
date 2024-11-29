import { useContext } from 'react';
import { HotelsContext } from '../context/hotel-provider';

// Hook to access global state and actions
export const useGlobalState = () => {
  const context = useContext(HotelsContext);

  if (!context) {
    throw new Error('useGlobalState must be used within a HotelProvider');
  }

  return context;
};
