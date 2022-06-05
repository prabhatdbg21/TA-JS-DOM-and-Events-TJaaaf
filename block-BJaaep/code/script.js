let pro = document.querySelector(".pro")
let boxes = document.querySelectorAll(".box1")


let count = 0 ;

boxes.forEach ((boxee) => {
    count = count + 1
    boxee.innerText = count ;  
     
})

function hadleEvent (event){
    let nu = (event.target.innerText) 
    event.target.innerText = nu
    setTimeout(() => {
    event.target.innerText = ''
    }, 1000);
}

pro.addEventListener ("click" , hadleEvent)