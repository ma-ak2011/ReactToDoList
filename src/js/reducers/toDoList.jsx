const initialState = { toDoList: [], title: '', content: '' };

export default function toDoListReducer(state = initialState, action){
  switch (action.type) {

    case 'ADD_TODO':
      return Object.assign({}, state, {
        toDoList: [...state.toDoList, { id: action.id, title: state.title, content: state.content }]
      });

    case 'DELETE_TODO':
      return Object.assign({}, state, { toDoList: state.toDoList.filter(t => t.id !== action.id)});

    case 'CHANGE_TITLE':
      return Object.assign({}, state, { title: action.title });

    case 'CHANGE_CONTENT':
      return Object.assign({}, state, { content: action.content });
      
    default:
      return state;
  }
}