import { delay } from 'redux-saga';
import { select } from 'redux-saga/effects';
import { call, put, fork, take } from 'redux-saga/effects';
import {
  GET_TODOS,
  successGetToDos,
  errorGetToDos,
  ADD_TODO,
  successAdd,
  errorAdd,
  DELETE_TODO,
  successDelete,
  errorDelete
} from '../actions/toDoList';
import API from '../api/api';

function* handleGetToDos() {
  while (true) {
    const { payload } = yield take(GET_TODOS);
    const { text, error } = yield call(API.getToDos, {});
    if (text && !error) {
      yield put(successGetToDos({ newToDoList: (JSON.parse(text)).UserList }));
    } else {
      yield put(errorGetToDos({ error }));
    }
  }
}

function* handleAddToDo() {
  while (true) {
    const { payload } = yield take(ADD_TODO);
    const state = yield select();
    const { text, error } = yield call(API.addToDo, { title: state.toDoListReducer.title, content: state.toDoListReducer.content});

    const response = yield call(API.getToDos, {});
    if (response.text && !response.error) {
      yield put(successAdd({ newToDoList: (JSON.parse(response.text)).UserList }));
    } else {
      yield put(errorAdd({ error }));
    }
  }
}

function* handleDeleteToDo() {
  while (true) {
    const { payload } = yield take(DELETE_TODO);
    const { text, error } = yield call(API.deleteToDo, payload);

    const response = yield call(API.getToDos, {});
    if (response.text && !response.error) {
      yield put(successDelete({ newToDoList: (JSON.parse(response.text)).UserList }));
    } else {
      yield put(errorDelete({ error }));
    }
  }
}

export default function* rootSaga() {
  yield fork(handleGetToDos);
  yield fork(handleAddToDo);
  yield fork(handleDeleteToDo);
}