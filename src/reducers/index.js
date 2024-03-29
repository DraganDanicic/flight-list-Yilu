import { flightReducer } from './flightReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  flights: flightReducer,
});

export default rootReducer;