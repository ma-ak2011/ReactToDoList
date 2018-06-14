import { expect } from 'chai';
import _ from 'lodash';
import toDoListReducer, { initialState } from '../src/js/reducers/toDoList';
import * as actions from '../src/js/actions/toDoList';

describe('toDoListReducer', () => {
  it('changes title 変更されたテキスト', () => {

    const changedTitle = '変更されたテキスト';
    const newState = toDoListReducer(initialState, actions.changeTitle(changedTitle));
    expect(newState.title).to.be.eql(changedTitle);
    expect(newState.content).to.be.eql('');
    expect(newState.toDoList.length).to.be.eql(0);
  })

  it('changes content 変更されたコンテント', () => {

    const changedContent = '変更されたコンテント';
    const newState = toDoListReducer(initialState, actions.changeContent(changedContent));
    expect(newState.content).to.be.eql(changedContent);
    expect(newState.title).to.be.eql('');
    expect(newState.toDoList.length).to.be.eql(0);
  })

  it('returns ToDos when successGetToDos is called', () => {

    const newToDoList = [
      {
        id: 0,
        title: 'タイトル',
        content: 'コンテント'
      },
      {
        id: 1,
        title: 'title',
        content: 'content'
      }
    ];
    const newState = toDoListReducer(initialState, actions.successGetToDos({ newToDoList: newToDoList}));
    expect(newState.content).to.be.eql('');
    expect(newState.title).to.be.eql('');
    expect(newState.toDoList.length).to.be.eql(2);

    expect(newState.toDoList[0].id).to.be.eql(0);
    expect(newState.toDoList[0].title).to.be.eql('タイトル');
    expect(newState.toDoList[0].content).to.be.eql('コンテント');

    expect(newState.toDoList[1].id).to.be.eql(1);
    expect(newState.toDoList[1].title).to.be.eql('title');
    expect(newState.toDoList[1].content).to.be.eql('content');
  })
})