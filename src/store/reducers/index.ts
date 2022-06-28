import { combineReducers } from 'redux';
import { calcReducer } from './calculator';

export const rootReducer = combineReducers({
  calc: calcReducer,
});
