import { connect } from 'react-redux';
import ToDoList from '../components/ToDoList';
import * as Actions from '../actions/index';
import { bindActionCreators } from 'redux';

export default connect(
  state => ({ toDoList: state.toDoListReducer.toDoList }),
  dispatch => bindActionCreators(Actions, dispatch)
)(ToDoList);
