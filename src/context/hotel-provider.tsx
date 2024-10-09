import { createContext, useEffect, useReducer } from 'react';
import { brands, hotels } from '../lib/placeholder-data';
import {
  BrandAction,
  Hotel,
  HotelAction,
  HotelsContextType
} from '../lib/definitions';

const hotelsReducer = (hotelsState: Hotel[], action: HotelAction): Hotel[] => {
  switch (action.type) {
    case 'add':
      return [...hotelsState, action.newHotel];

    case 'edit':
      return hotelsState.map((olHotel) =>
        olHotel.id === action.newHotel!.id ? action.newHotel : olHotel
      );

    case 'delete':
      return hotelsState.filter((hotel) => hotel.id !== action.id);

    case 'removeBrandFromHotels':
      return hotelsState.map((hotel) =>
        hotel.brand === action.brand ? { ...hotel, brand: undefined } : hotel
      );

    default:
      return hotelsState;
  }
};

const brandsReducer = (
  brandsState: string[],
  action: BrandAction
): string[] => {
  switch (action.type) {
    case 'add':
      const updatedBrands = new Set(brandsState);
      updatedBrands.add(action.newBrand);
      return Array.from(updatedBrands);

    case 'delete':
      const reducedBrand = new Set(brandsState);
      reducedBrand.delete(action.brand);
      return Array.from(reducedBrand);
  }
};

export const HotelsContext = createContext<HotelsContextType | undefined>(
  undefined
);

// Use localStorage to initialize the hotelsState
const hotelsInitializer = (): Hotel[] => {
  const storedHotels = localStorage.getItem('hotels');
  return storedHotels ? JSON.parse(storedHotels) : hotels;
};

const brandsInitializer = (): string[] => {
  const storedBrands = localStorage.getItem('brands');
  return storedBrands ? JSON.parse(storedBrands) : brands;
};

const HotelProvider = ({ children }: { children: React.ReactNode }) => {
  const [hotelsState, dispatchHotels] = useReducer(
    hotelsReducer,
    [],
    hotelsInitializer
  );
  const [brandsState, dispatchBrands] = useReducer(
    brandsReducer,
    [],
    brandsInitializer
  );

  useEffect(() => {
    localStorage.setItem('hotels', JSON.stringify(hotelsState));
  }, [hotelsState]);

  useEffect(() => {
    localStorage.setItem('brands', JSON.stringify(Array.from(brandsState)));
  }, [brandsState]);

  return (
    <HotelsContext.Provider
      value={{
        hotels: hotelsState,
        dispatchHotels,
        brands: brandsState,
        dispatchBrands
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
export default HotelProvider;
