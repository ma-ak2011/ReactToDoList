import React            from 'react'

const ToDoList = ({ toDoList, deleteToDo }) => {
  return(
    <ul>
      {
        toDoList.map((m, i) => {
          return <li key={i}>
            タイトル：{m.title}  No.{m.id}<br/>
            内容：{m.content}<br/>
            <button onClick={e => deleteToDo(m.id)}>削除</button>
          </li>;
        })
      }
    </ul>
  );
};

export default ToDoList;

