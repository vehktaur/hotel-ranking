import { BrandAction, Hotel, HotelAction } from './definitions';

// Reducer for managing the state of hotels
export const hotelsReducer = (
  hotelsState: Hotel[],
  action: HotelAction
): Hotel[] => {
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

// Reducer for managing the state of hotel brands
export const brandsReducer = (
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
