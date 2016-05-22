import { createStore } from 'redux';
import rootReducer from './reducers/index.js';

/**
 * Create the store from the reducers
 */
export default function configureStore() {
  return createStore(rootReducer);
}
