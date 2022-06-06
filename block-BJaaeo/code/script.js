let result =  document.querySelector (".result")
let allInput = document.querySelectorAll(".input")

allInput.forEach ((input) =>{
    input.addEventListener ( "click" , (event) => {
        if ( result.innerText == 0){
            result.innerText = event.target.innerText ;
        }
        else {
            result.innerText += event.target.innerText ;
        }
    })
})

let equalto = document.querySelector (".equalto") ;
equalto.addEventListener ( "click" , () => {
    result.innerText = eval (result.innerText) ;
})

let clear = document.querySelector (".clear")
clear.addEventListener ( "click" , () => {
    result.innerText = 0 ;
})