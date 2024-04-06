document.addEventListener('DOMContentLoaded', function() {
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const todoList = document.getElementById('todo-list');

    addButton.addEventListener('click', function() {
        const task = taskInput.value.trim();
        if (task !== '') {
            const listItem = document.createElement('li');
            listItem.textContent = task;
            todoList.appendChild(listItem);
            taskInput.value = ''; // Clear input field

            // Add click event to remove task
            listItem.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });
        } else {
            alert("文字に何も入力されていませんよ")
        }
    });
});
