import { expect } from 'chai';
import _ from 'lodash';
import toDoListReducer, { initialState } from '../src/js/reducers/toDoList';
import * as actions from '../src/js/actions/toDoList';

describe('toDoListReducer', () => {
  it('changes title 変更されたテキスト', () => {

    const changedTitle = '変更されたテキスト';
    const newState = toDoListReducer(initialState, actions.changeTitle(changedTitle));
    expect(newState.title).to.be.eql(changedTitle);
  })

  it("dosen't change content", () => {

    const changedTitle = '変更されたテキスト';
    const newState = toDoListReducer(initialState, actions.changeTitle(changedTitle));
    expect(newState.content).to.be.eql('');
  })

  it("dosen't change ToDoList", () => {

    const changedTitle = '変更されたテキスト';
    const newState = toDoListReducer(initialState, actions.changeTitle(changedTitle));
    expect(newState.toDoList.length).to.be.eql(0);
  })
})