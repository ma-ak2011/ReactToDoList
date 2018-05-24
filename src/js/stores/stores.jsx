import {createStore, combineReducers,  applyMiddleware} from 'redux';
import toDoListReducer from '../reducers/toDoList';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/sagas';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const RootReducer = combineReducers({toDoListReducer});
  
  const store = createStore(
    RootReducer, 
    initialState, 
    applyMiddleware(
      sagaMiddleware, logger
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}