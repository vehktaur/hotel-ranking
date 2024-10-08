export interface Hotel {
  id: number | string;
  name: string;
  city: string;
  country: string;
  address: string;
  brand?: string;
  rating: number;
  review?: string;
}
