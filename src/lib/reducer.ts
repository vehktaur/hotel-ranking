import { GlobalState, StateAction } from './definitions';

// Reducer for managing the global state
export const reducer = (
  state: GlobalState,
  action: StateAction,
): GlobalState => {
  switch (action.type) {
    case 'addHotel':
      return { ...state, hotels: [...state.hotels, action.newHotel] };

    case 'editHotel':
      return {
        ...state,
        hotels: state.hotels.map((olHotel) =>
          olHotel.id === action.newHotel!.id ? action.newHotel : olHotel,
        ),
      };

    case 'deleteHotel':
      return {
        ...state,
        hotels: state.hotels.filter((hotel) => hotel.id !== action.id),
      };

    case 'addBrand':
      const updatedBrands = new Set(state.brands);
      updatedBrands.add(action.newBrand);
      return { ...state, brands: Array.from(updatedBrands) };

    case 'deleteBrand':
      const reducedBrand = new Set(state.brands);
      reducedBrand.delete(action.brand);
      return {
        brands: Array.from(reducedBrand),
        hotels: state.hotels.map((hotel) =>
          hotel.brand === action.brand ? { ...hotel, brand: undefined } : hotel,
        ),
      };

    default:
      return state;
  }
};
