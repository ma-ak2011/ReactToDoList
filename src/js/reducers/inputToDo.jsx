const initialState = { title: '', content: '' };

export default function inputToDoListReducer(state = initialState, action){
  switch (action.type) {
  case 'CHANGE_TITLE':
    return Object.assign({}, state, { title: action.title });

  case 'CHANGE_CONTENT':
    return Object.assign({}, state, { content: action.content });
    
  default:
    return state;
  }
}