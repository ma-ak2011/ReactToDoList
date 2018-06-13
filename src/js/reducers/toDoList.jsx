import * as Actions from '../actions/toDoList';

export const initialState = { title: '', content: '', toDoList:[], error:{} };

export default function toDoListReducer(state = initialState, action){
  switch (action.type) {
  case Actions.SUCCESS_GET_TODOS:
    return Object.assign({}, state, {
      toDoList: action.payload.newToDoList
    });

  case Actions.ERROR_GET_TODOS:
    return Object.assign({}, state, {
      error: action.error
    });

  case Actions.SUCCESS_ADD_TODO:
    return Object.assign({}, state, {
      toDoList: action.payload.newToDoList,
      title: '',
      content: ''
    });

  case Actions.ERROR_ADD_TODO:
    return Object.assign({}, state, {
      error: action.error
    });

  case Actions.SUCCESS_DELETE_TODO:
    return Object.assign({}, state, {
      toDoList: action.payload.newToDoList
    });

  case Actions.CHANGE_TITLE:
    return Object.assign({}, state, { title: action.payload.title });

  case Actions.CHANGE_CONTENT:
    return Object.assign({}, state, { content: action.payload.content });
    
  default:
    return state;
  }
}