const ToDoList = ({ toDoList, deleteToDo }) => {
  return(
    <ul>
      {
        toDoList.map((m, i) => {
          return <li key={i}>
            タイトル：{m.title}<br/>
            内容：{m.content}<br/>
            <button onClick={e => deleteToDo(m.id)}>削除{m.id}</button>
          </li>;
        })
      }
    </ul>
  );
};

export default ToDoList;

