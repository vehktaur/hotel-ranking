import { createContext, useEffect, useReducer } from 'react';
import { hotels } from '../lib/placeholder-data';
import { Hotel, HotelAction, HotelsContextType } from '../lib/definitions';

const reducer = (state: Hotel[], action: HotelAction): Hotel[] => {
  switch (action.type) {
    case 'add':
      return [...state, action.newHotel];

    case 'edit':
      return state.map((olHotel) =>
        olHotel.id === action.newHotel!.id ? action.newHotel : olHotel
      );

    case 'delete':
      return state.filter((hotel) => hotel.id !== action.id);
    default:
      return state;
  }
};

export const HotelsContext = createContext<HotelsContextType | undefined>(
  undefined
);

// Use localStorage to initialize the state
const initializer = (): Hotel[] => {
  const storedHotels = localStorage.getItem('hotels');
  return storedHotels ? JSON.parse(storedHotels) : hotels;
};

const HotelProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, [], initializer);

  useEffect(() => {
    localStorage.setItem('hotels', JSON.stringify(state));
  }, [state]);

  return (
    <HotelsContext.Provider value={{ hotels: state, dispatch }}>
      {children}
    </HotelsContext.Provider>
  );
};
export default HotelProvider;
