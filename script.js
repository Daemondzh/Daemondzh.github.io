document.getElementById('todo-submit').addEventListener('click', function() {
    var inputValue = document.getElementById('todo-input').value;
    if (inputValue) {
        var li = document.createElement('li');
        li.textContent = inputValue;
        document.getElementById('todo-list').appendChild(li);
        document.getElementById('todo-input').value = '';
    }
});

document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('form-message').style.display = 'block';
});
