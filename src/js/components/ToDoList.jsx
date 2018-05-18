const ToDoList = ({ toDoList, title, content,  addToDo, deleteToDo, changeTitle, changeContent }) => {
  return(
    <div>
      <div>
        タイトル：<input type="text" value={title} onChange={e => changeTitle(e.target.value)}/>
        内容：<input type="text" value={content} onChange={e => changeContent(e.target.value)}/>
      </div>
      
      <div onClick={e => addToDo()}>追加</div>
      
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
    </div>
  );
};

export default ToDoList;

