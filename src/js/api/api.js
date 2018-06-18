import request from 'superagent';

function getToDos(payload) {
  return new Promise((resolve, reject) => {
    request
      .get('http://localhost:3000/react_to_do_list')
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
      .post('http://localhost:3000/react_to_do_list')
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
      .delete('http://localhost:3000/react_to_do_list/' + payload.id)
      .send()
      .end((err, res) =>{
        if(err)
          reject(err);
        else
          resolve(res);
      });
  });
}

export default { addToDo, deleteToDo, getToDos };