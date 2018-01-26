function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    if (newToDoText.value == 'delete') {
      return;
    }
    else if (newToDoText.value != 'delete') {
      event.preventDefault();

      let title = newToDoText.value;
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      checkbox.type = 'checkbox';
      //give the title var a use
      newLi.textContent = title;
      //attach checkbox to li
      newLi.appendChild(checkbox);
      //attach li to ul
      toDoList.appendChild(newLi);
      //empty input
      newToDoText.value = '';
    }
  });
}

window.onload = function() {
  onReady();
}
