import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { loadState, saveState } from './localStorage.js';
import throttle from 'lodash/throttle';

/**
 * Create the store from the reducers
 */
export default function configureStore() {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState
  );

  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
}
