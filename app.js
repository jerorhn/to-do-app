function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  //add delete button selector
  const deleteButton = document.getElementById('deleteButton');

  addToDoForm.addEventListener('submit', () => {
      event.preventDefault();

      let title = newToDoText.value;
      let newLi = document.createElement('li');
      let checkbox = document.createElement('input');
      //add class to checkbox to be able to select all checkboxes (creates an arr)
      checkbox.className = 'boxes';
      checkbox.type = 'checkbox';
      //give the title var a use
      newLi.textContent = title;
      //attach checkbox to li
      newLi.appendChild(checkbox);
      //attach li to ul
      toDoList.appendChild(newLi);
      //empty input
      newToDoText.value = '';
  });

  //add event listener to delete button when clicked
  deleteButton.addEventListener('click', () => {
    //prevent refreshing
    event.preventDefault();

    //select arr of all checkboxes
    var listOfBoxes = document.getElementsByClassName('boxes');
    //loop through all checkboxes (using their index)
    for (var i = listOfBoxes.length - 1; i >= 0; i--) {
      //if checked, delete li (parent) of said checkbox
      if (listOfBoxes[i].checked) {
        listOfBoxes[i].parentNode.remove('listOfBoxes[i].parentNode');
      };
    };
  });
}

window.onload = function() {
  onReady();
}
