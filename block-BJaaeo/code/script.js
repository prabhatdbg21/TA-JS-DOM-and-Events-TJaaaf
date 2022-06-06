let allInput = document.querySelectorAll(".input")

allInput.forEach ((input) =>{
    input.addEventListener ( "click" , (event) => {
        console.log  (event.target.innerText) ;
        document.querySelector (".result").innerText += event.target.innerText ;
    })
})

let equalto = document.querySelector (".equalto") ;
equalto.addEventListener ( "click" , () => {
    document.querySelector (".result").innerText = eval (document.querySelector (".result").innerText) ;
})

let clear = document.querySelector (".clear")
clear.addEventListener ( "click" , () => {
    document.querySelector (".result").innerText = "" ;
})