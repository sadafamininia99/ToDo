const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

form.addEventListener('submit' ,(e) =>{
e.preventDefault();

//prevent the form having the default behaviar


addTodo();
})

function addTodo(todo){
    let todoText = input.value;
    if(todo){
        todoText =todo.todoText
    }
}
