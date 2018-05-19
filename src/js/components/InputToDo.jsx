const InputToDo = ({ title, content, changeTitle, changeContent, addToDo }) => {
  return(
    <div>
      <div>
        タイトル：<input type="text" value={title} onChange={e => changeTitle(e.target.value)}/>
        <br/>
        内容：<textArea value={content} onChange={e => changeContent(e.target.value)}/>
      </div>
      <div onClick={e => addToDo()}>追加</div>
    </div>
  );
};

export default InputToDo;
