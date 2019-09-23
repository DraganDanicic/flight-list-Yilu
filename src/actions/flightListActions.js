// @flow
import {type ActionTypes} from "../models/ActionTypes";
import {type Action} from "../models/Action";
import { flightData } from '../mocks/flightData';


export let flightListActionType: ActionTypes = {
  GET_FLIGHTS: 'GET_FLIGHTS',
  SORT_FLIGHTS: 'SORT_FLIGHTS',
};

export let getFlights: Action = {
  type: flightListActionType.GET_FLIGHTS,
  value: flightData,
};

export let sortFlights: Action = {
  type: flightListActionType.GET_FLIGHTS
};