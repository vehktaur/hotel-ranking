import { createContext, useEffect, useReducer } from 'react';
import { brands, hotels } from '../lib/placeholder-data';
import { Hotel, HotelsContextType } from '../lib/definitions';
import { brandsReducer, hotelsReducer } from '../lib/reducer';

// Create a context to manage hotels and brands state
export const HotelsContext = createContext<HotelsContextType | undefined>(
  undefined,
);

// Initialize hotels state from localStorage or fallback to default data
const hotelsInitializer = (): Hotel[] => {
  const storedHotels = localStorage.getItem('hotels');
  return storedHotels ? JSON.parse(storedHotels) : hotels;
};

// Initialize brands state from localStorage or fallback to default data
const brandsInitializer = (): string[] => {
  const storedBrands = localStorage.getItem('brands');
  return storedBrands ? JSON.parse(storedBrands) : brands;
};

// Global Context provider component for hotels and brands
const HotelProvider = ({ children }: { children: React.ReactNode }) => {
  //Create state for hotels and Brands
  const [hotelsState, dispatchHotels] = useReducer(
    hotelsReducer,
    [],
    hotelsInitializer,
  );
  const [brandsState, dispatchBrands] = useReducer(
    brandsReducer,
    [],
    brandsInitializer,
  );

  // Persist the hotels state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('hotels', JSON.stringify(hotelsState));
  }, [hotelsState]);

  // Persist the brands state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('brands', JSON.stringify(Array.from(brandsState)));
  }, [brandsState]);

  return (
    <HotelsContext.Provider
      value={{
        hotels: hotelsState,
        dispatchHotels,
        brands: brandsState,
        dispatchBrands,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
export default HotelProvider;
