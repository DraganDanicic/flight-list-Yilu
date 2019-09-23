// @fow
import { flightListActionType } from '../actions/flightListActions';
import { FlightList } from '../views/FlightList/FlightList';
import { type FlightState } from '../models/FlightState';

const initialState: FlightState = {
  sorting: {
    field: 'origin',
    order: 'asc',
  },
  collection: []
}

const sortFlightList = (
  list: Flight[],
  field: typeof initialState.sort.field,
  order: typeof initialState.sort.order) => {
    const factor = order === 'asc' ? 1 : -1;
    return -1 !== ['departure', 'arrival'].findIndex(e => e === field) ?
      list.sort((a, b) => (a[field] - b[field]) * factor) :
      list.sort((a, b) => a[field].value.localeCompare(b[field].value) * factor)
  }

const sortState = (state) => ({
  ...state,
  ...{
    collection: sortFlightList(
      [...state.collection],
      state.sorting.field,
      state.sorting.order
    )
  }
});

export const flightReducer = (state: FlightState = initialState, action: Action) => {
  switch (action.type) {
    case flightListActionType.GET_FLIGHTS:
      state = sortState({...state, ...{collection: action.value}});
    case flightListActionType.SORT_FLIGHT:
      state = sortState({
        ...state,
        ...{sortState: {order: action.value.order, field: action.value.field}
        }
      });
      break;
    default:;
  }
  return state
}