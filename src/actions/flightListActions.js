// @flow
import {type ActionTypes} from '../models/ActionTypes';
import {type Action} from '../models/Action';
import {type SortableFields, type SortDirection} from '../models/FlightState';
import { flightData } from '../mocks/flightData';



export let flightListActionType: ActionTypes = {
  GET_FLIGHTS: 'GET_FLIGHTS',
  SORT_FLIGHTS: 'SORT_FLIGHTS',
};

export let getFlights: Action = {
  type: flightListActionType.GET_FLIGHTS,
  value: flightData,
};

export let sortFlights: Action = (
    ordering: {
      field: SortableFields,
      direction: SortDirection,
    }
  ) => ({
  type: flightListActionType.GET_FLIGHTS,
  value: ordering,
})