let nextTodoId = 0;
export const addToDo = (title, content) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  title,
  content
});

export const deleteToDo = id => ({
  type: 'DELETE_TODO',
  id
});

export const changeTitle = title => ({
  type: 'CHANGE_TITLE',
  title
});

export const changeContent = content => ({
  type: 'CHANGE_CONTENT',
  content
});
