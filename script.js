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

        todoText = todo.todo.text;
    }
    // console.log(todoText)
    if(todoText){
        const todoEl =document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed');

        }
        todoEl.innerText =todoText;
        todosUL.appendChild(todoEl)
        input.value =""
         
    }
}

