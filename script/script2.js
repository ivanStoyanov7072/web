const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// events
todoButton.addEventListener('click', addToDo);
todoList.addEventListener('click', deleteCheck);
// function
let arrayInput = []
function addToDo(event) {
    // create elements
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo'); // add class on element
    
    const new_li = document.createElement('li');
    new_li.classList.add('todo-item');
    new_li.innerText = todoInput.value;// get value
    let textInput = todoInput.value;
    arrayInput.push(textInput)
    todoInput.value = "";//clear value
    
    todoDiv.appendChild(new_li);
    // event.preventDefault();
    // console.log("todoInput.value");

    const completedButton = document.createElement('button');
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    
    const trashButton = document.createElement('button');
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';

    todoList.appendChild(todoDiv);
}

function deleteCheck(e) {
    // console.log(e.target);

    // delete todo
    const item = e.target;
    if (item.classList[0]=== "trash-btn") {
        const todo = item.parentElement;
        todo.remove();
    }
    // check mark
    if (item.classList[0] ==="complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
        console.log(item.classList[0])
        
        function addOrder () {
            // e.preventDefault() //stop to submit data from input
            
            
            let pushData  = document.querySelector('.order')

            pushData.innerHTML =`<p>${arrayInput}</p>`
            console.log(arrayInput)
        }
        addOrder()

    }
}

// const btnText = document.querySelector('.btn-text');
// btnText.addEventListener('click', getText)
// const text = document.querySelector('.text')
// function getText(){
//     fetch('../page/someText.txt')
//     .then((res) =>res.text())
//     .then((data) =>{text.innerHTML=data})
// }

// order list

