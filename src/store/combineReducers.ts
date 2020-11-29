import { combineReducers as joinReducers } from 'redux';
import reducers from './reducers';

const combineReducers = joinReducers(reducers);

export default combineReducers;
