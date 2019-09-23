import {type Flight} from '../Flight';

export type SortableFields ='departure' | 'arrival' | 'origin' | 'destination';
export type SortDirection = 'asc' | 'desc';
export type FlightState = {
  sort: {
    field: SortableFields,
    order: SortDirection,
  },
  collection: Flight[];
}
