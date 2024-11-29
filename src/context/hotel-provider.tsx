import { createContext, useEffect, useReducer } from 'react';
import { brands, hotels } from '../lib/placeholder-data';
import { GlobalState, HotelsContextType } from '../lib/definitions';
import { reducer } from '../lib/reducer';

// Create a context to manage hotels and brands state
export const HotelsContext = createContext<HotelsContextType | undefined>(
  undefined,
);

// Initialize global state from localStorage or fallback to default data
const stateInitializer = (): GlobalState => {
  const storedState = localStorage.getItem('state');
  return storedState ? JSON.parse(storedState) : { hotels, brands };
};

// Global Context provider component for hotels and brands
const HotelProvider = ({ children }: { children: React.ReactNode }) => {
  //Create state for hotels and Brands
  const [state, dispatch] = useReducer(reducer, {}, stateInitializer);

  // Persist the global state in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('state', JSON.stringify(state));
  }, [state]);

  return (
    <HotelsContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </HotelsContext.Provider>
  );
};
export default HotelProvider;
