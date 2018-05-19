let nextTodoId = 0;
export const addToDo = () => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
});

export const changeTitle = title => ({
  type: 'CHANGE_TITLE',
  title
});

export const changeContent = content => ({
  type: 'CHANGE_CONTENT',
  content
});