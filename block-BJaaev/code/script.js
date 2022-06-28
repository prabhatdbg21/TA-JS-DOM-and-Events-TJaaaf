let inputText = document.querySelector("#text");
let root = document.querySelector ("ul");
let display = document.querySelector (".flex");
let count = document.querySelector(".count");

let allTodos = JSON.parse(localStorage.getItem("todos")) || [] ;

function handleInput(event){
    let value = event.target.value;
    if (event.keyCode === 13 && value !== 0){
        let todo = {
            name : value ,
            isDone : false,
        };
        allTodos.push(todo);

        createUI (allTodos , root)
        localStorage.setItem ("todos" , JSON.stringify(allTodos)) ;
        display.classList.remove ("none")
    }
}

function handleDelete(event){
    let id = event.target.dataset.id ;
    allTodos.splice ( id , 1);
    localStorage.setItem ("todos" , JSON.stringify(allTodos)) ;
    createUI (allTodos , root) ;
}

let all = document.querySelector (".all")
function allEvent (event){
    createUI (allTodos , root);
}
all.addEventListener ("click" , allEvent);


let active = document.querySelector (".active")
function activeEvent (event){
    let newTodosActive = allTodos.filter ((todos) =>{
        return todos.isDone == false
    })
    createUI (newTodosActive , root);
}
active.addEventListener ("click" , activeEvent);


let completed = document.querySelector (".completed")
function completedEvent (event){
    let newTodos = allTodos.filter ((todos) =>{
        return todos.isDone == true
    })
    createUI (newTodos , root);
}
completed.addEventListener ("click" , completedEvent);


let clearCompleted = document.querySelector (".clear")
function clear (event){
    localStorage.todos = "" ;
    let newTodos = [];
    createUI (newTodos , root);
    display.classList.add ("none")
}
clearCompleted.addEventListener ("click" , clear);


function handleToggle(event){
    let id = event.target.dataset.id ;
    allTodos [id].isDone = !allTodos [id].isDone ;
  
    /*
    console.log (event.target.nextElementSibling)
    if ( allTodos [id].isDone == true){
        console.log (event.target.nextElementSibling)
        event.target.nextElementSibling.classList.add ("linethrough")
    }
    */
   
    localStorage.setItem ("todos" , JSON.stringify(allTodos)) ;
    createUI (allTodos , root);

    let newTodosActive = allTodos.filter ((todos) =>{
        return todos.isDone == false
    })
    function countNumber () {
        count.innerText = newTodosActive.length  ;
    }
    countNumber ();
}


function createUI (data, rootElm){
    rootElm.innerHTML = "" ;

    data.forEach((todo , index ) => {
        let li = document.createElement ("li");
        let input = document.createElement ("input");
        input.type = "checkbox";

        input.addEventListener("input" , handleToggle);
        input.setAttribute ("data-id" , index);
        input.checked = todo.isDone ;
        
        let p = document.createElement ("p");
        p.innerText = todo.name;

        let span = document.createElement ("span");
        span.innerText = "X" ;
        span.setAttribute ("data-id" , index);
        span.addEventListener ("click" , handleDelete);

        li.append (input , p , span);
        rootElm.append (li)

        display.classList.add ("display")
    });
}

createUI (allTodos , root)

inputText.addEventListener ("keyup" , handleInput);