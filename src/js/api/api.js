import request from 'superagent';

function getToDos(payload) {
  return new Promise((resolve, reject) => {
    request
      .get('http://localhost:65037/api/ReactToDoList/GetToDos')
      .send({})
      .end((err, res) =>{
        if(err)
          reject(err);
        else
          resolve(res);
      });
  });
}

function addToDo(payload) {
  return new Promise((resolve, reject) => {
    request
      .post('http://localhost:65037/api/ReactToDoList/Add')
      .type('form')
      .send({ title: payload.title, content: payload.content })
      .end((err, res) =>{
        if(err)
          reject(err);
        else
          resolve(res);
      });
  });
}

function deleteToDo(payload) {
  return new Promise((resolve, reject) => {
    request
      .put('http://localhost:65037/api/ReactToDoList/Delete')
      .type('form')
      .send({ id: payload.id})
      .end((err, res) =>{
        if(err)
          reject(err);
        else
          resolve(res);
      });
  });
}

export default { addToDo, deleteToDo, getToDos };