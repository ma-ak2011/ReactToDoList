import {createStore,  applyMiddleware} from 'redux';
import Reducer from './reducers/combineReducers';
import {createLogger} from 'redux-logger';

export default function configureStore() {
  const logger = createLogger({logger:console});
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
  const store = createStoreWithMiddleware(Reducer);
  return store;
}