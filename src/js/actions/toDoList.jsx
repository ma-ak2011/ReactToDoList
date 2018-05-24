import { createAction } from 'redux-actions';

export const GET_TODOS = 'GET_TODOS';
export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const CHANGE_TITLE = 'CHANGE_TITLE';
export const CHANGE_CONTENT = 'CHANGE_CONTENT';

//sagaからのActionType
export const SUCCESS_GET_TODOS = 'SUCCESS_GET_TODOS';
export const ERROR_GET_TODOS = 'ERROR_GET_TODOS';
export const SUCCESS_ADD_TODO = 'SUCCESS_ADD_TODO';
export const ERROR_ADD_TODO = 'ERROR_ADD_TODO';
export const SUCCESS_DELETE_TODO = 'SUCCESS_DELETE_TODO';
export const ERROR_DELETE_TODO = 'ERROR_DELETE_TODO';

export const getToDos = () => ({
  type: GET_TODOS,
  payload: {},
  meta: {},
  error: false
});

export const successGetToDos = createAction(SUCCESS_ADD_TODO);
export const errorGetToDos = createAction(ERROR_ADD_TODO);

export const addToDo = () => ({
  type: ADD_TODO,
  payload: {},
  meta: {},
  error: false
});

export const successAdd = createAction(SUCCESS_ADD_TODO);
export const errorAdd = createAction(ERROR_ADD_TODO);

export const deleteToDo = id => ({
  type: DELETE_TODO,
  payload: { id: id },
  meta: {},
  error: false
});

export const successDelete = createAction(SUCCESS_DELETE_TODO);
export const errorDelete = createAction(ERROR_DELETE_TODO);

export const changeTitle = title => ({
  type: CHANGE_TITLE,
  payload: { title: title },
  meta: {},
  error: false
});

export const changeContent = content => ({
  type: CHANGE_CONTENT,
  payload: { content: content },
  meta: {},
  error: false
});