import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import ToDoList from './containers/ToDoList';
import toDoListReducer from './reducers/toDoList';


const RootReducer = combineReducers({toDoListReducer});

const store = createStore(RootReducer);

ReactDOM.render(
  <Provider store={ store }>
    <ToDoList />
  </Provider>,
  document.getElementById('root')
);