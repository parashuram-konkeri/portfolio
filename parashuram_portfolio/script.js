
document.getElementById('addTaskButton').addEventListener('click', function () {
    const taskInput = document.getElementById('taskInput');

    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const taskList = document.getElementById('taskList');
    const listItem = document.createElement('li');

    listItem.textContent = taskText;

    // listItem.addEventListener('click', function() {
    //     listItem.classList.toggle('completed');
    // });

    // Add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function (e) {
        e.stopPropagation();
        taskList.removeChild(listItem);
    });
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = '';
});