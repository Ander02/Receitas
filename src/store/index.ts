import { createStore } from 'redux';

import combineReducersApp from './combineReducers';
import { loadState, saveState } from './localState';
import { StoreLocalState } from '../types/store/Store';

let persistedState: StoreLocalState = {};

loadState().then((state) => {
  persistedState = state;
});

const storeApp = createStore(combineReducersApp, persistedState);

storeApp.subscribe(async () => {
  await saveState({
    authentication: storeApp.getState().authentication,
  });
});

export default storeApp;
