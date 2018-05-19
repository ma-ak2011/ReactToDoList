import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import toDoListReducer from './reducers/toDoList';
import inputToDoListReducer from './reducers/inputToDo';

const RootReducer = combineReducers({toDoListReducer, inputToDoListReducer});

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);