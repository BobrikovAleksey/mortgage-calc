import { combineReducers } from 'redux';
import { inputFormReducer } from './inputForm';

export const mortgageCalc = combineReducers({
  inputForm: inputFormReducer,
});
