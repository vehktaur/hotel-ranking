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

export interface HotelsContextType {
  hotels: Hotel[];
  dispatch: Dispatch<HotelAction>;
}

export type HotelAction =
  | { type: 'add'; newHotel: Hotel }
  | { type: 'edit'; newHotel: Hotel }
  | { type: 'delete'; id: string };
