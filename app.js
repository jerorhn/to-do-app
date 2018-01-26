function onReady() {
  let toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  let id = 0;

  function createNewToDo() {
    if (!newToDoText.value) {
      return;
    }

    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: id
    });

    newToDoText.value = '';
    id++;
    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newToDo = document.createElement('li');

      const checkbox = document.createElement('input');
      checkbox.type = 'checkbox';

      const button = document.createElement('button');
      button.textContent = 'X';

      const title = document.createElement('span');
      title.textContent = toDo.title;

      newToDo.textContent = toDo.title;

      toDoList.appendChild(newToDo);
      newToDo.appendChild(checkbox);
      newToDo.appendChild(button);

      function deleteToDo(id) {
        toDos = toDos.filter(item => item.id !== id);
      }

      button.addEventListener('click', () => {
        deleteToDo(toDo.id);
        renderTheUI();
      });

    });
  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
    newToDoText.value = '';
  });

  renderTheUI();
}

window.onload = function() {
  onReady();
};
