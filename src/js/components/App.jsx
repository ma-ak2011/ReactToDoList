import React from 'react';
import { connect } from 'react-redux';
import InputToDo from '../containers/InputToDo';
import ToDoList from '../containers/ToDoList';
import { getToDos } from '../actions/toDoList';

class App extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.dispatch(getToDos());
  }

  render(){
    return (
      <div>
        <InputToDo />
        <ToDoList />
      </div>
    );
  }
}

export default connect()(App);