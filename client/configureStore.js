import { createStore } from 'redux';
import rootReducer from './reducers/index.js';
import { loadState, saveState } from './localStorage.js';

/**
 * Create the store from the reducers
 */
export default function configureStore() {
  const persistedState = loadState();
  const store = createStore(
    rootReducer,
    persistedState
  );

  store.subscribe(() => {
    saveState(store.getState());
  });

  return store;
}
