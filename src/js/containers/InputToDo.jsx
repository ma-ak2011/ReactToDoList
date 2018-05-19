import { connect } from 'react-redux';
import InputToDo from '../components/InputToDo';
import * as Actions from '../actions/inputToDo';
import { bindActionCreators } from 'redux';

export default connect(
  state => ({ 
    title: state.inputToDoListReducer.title,
    content: state.inputToDoListReducer.content
  }),
  dispatch => bindActionCreators(Actions, dispatch)
)(InputToDo);
