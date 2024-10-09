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
  dispatchHotels: Dispatch<HotelAction>;
  brands: string[];
  dispatchBrands: Dispatch<BrandAction>;
}

export type HotelAction =
  | { type: 'add'; newHotel: Hotel }
  | { type: 'edit'; newHotel: Hotel }
  | { type: 'delete'; id: string }
  | { type: 'removeBrandFromHotels'; brand: string };

export type BrandAction =
  | { type: 'add'; newBrand: string }
  | { type: 'delete'; brand: string };
