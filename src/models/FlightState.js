import {type Flight} from '../Flight';

export type FlightState = {
  sort: {
    field: 'departure' | 'arrival' | 'origin' | 'destination',
    order: 'asc' | 'desc',
  },
  collection: Flight[];
}