// @flow
import {type Flight} from './Flight';

export type SortableFields ='departure' | 'arrival' | 'origin' | 'destination';
export type SortDirection = 'asc' | 'desc';
export type FlightSort =  {
  field: SortableFields,
  order: SortDirection,
}
export type FlightState = {
  sorting: FlightSort,
  collection: Flight[];
}
