import { Dispatch } from 'react';

export interface Hotel {
  id: string;
  name: string;
  city: string;
  country: string;
  address: string;
  brand?: string;
  rating: number;
  review?: string;
}

export interface GlobalState {
  hotels: Hotel[];
  brands: string[];
}

export interface HotelsContextType extends GlobalState {
  dispatch: Dispatch<StateAction>;
}

export type StateAction =
  | { type: 'addHotel'; newHotel: Hotel }
  | { type: 'editHotel'; newHotel: Hotel }
  | { type: 'deleteHotel'; id: string }
  | { type: 'addBrand'; newBrand: string }
  | { type: 'deleteBrand'; brand: string };
