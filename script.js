document.getElementById('todo-submit').addEventListener('click', function() {
    var inputValue = document.getElementById('todo-input').value;
    if (inputValue) {
        var li = document.createElement('li');
        li.textContent = inputValue;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('todo-input').value = '';
    }
});
