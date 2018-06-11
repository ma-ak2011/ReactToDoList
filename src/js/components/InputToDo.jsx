import React            from 'react'

const InputToDo = ({ title, content, changeTitle, changeContent, addToDo }) => {
  return(
    <div>
      <div>
        タイトル：<input type="text" value={title} onChange={e => changeTitle(e.target.value)}/>
        <br/>
        内容：<input type="text" value={content} onChange={e => changeContent(e.target.value)}/>
      </div>
      <input type='button' onClick={e => addToDo()} value='追加'/>
    </div>
  );
};

export default InputToDo;
