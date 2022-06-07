let allInputIcon = document.querySelectorAll(".inp");
let allOutputIcon = document.querySelectorAll (".com i");
let display = document.querySelector (".display");

let inputNumber = document.querySelector (".first")
let winNum = 0 ;
let namee = document.querySelector (".name")

let outputNumber = document.querySelector (".second")
let outputNum = 0 ;
let outputName = document.querySelector (".outputName")


allOutputIcon[Math.floor(Math.random() * allOutputIcon.length)]

function handleClick (event){
    let input = (event.target.classList[0])
    let output = (allOutputIcon[Math.floor(Math.random() * allOutputIcon.length)].classList[0])
    document.querySelector (".dash").innerText = "---" ;
    document.querySelector (".dash1").innerText = "---" ;
    outputName.innerText = output ;
    namee.innerText = input ;

    if ( input == output){
        display.innerText = "It's a tie."
        return ;
    }
    if (input == "Rock" && output == "Scissors" ) {
        display.innerText = "You Won!"
        inputNumber.innerText = winNum += 1 ;
        // document.body.style.backgroundColor = "red" ;
        return;
    }
    if (input == "Paper" && output == "Rock" ) {
        display.innerText = "You Won!"
        inputNumber.innerText = winNum += 1;
        return;
    }
    if (input == "Scissors" && output == "Paper" ) {
        display.innerText = "You Won!"
        inputNumber.innerText = winNum += 1;
        return;
    }
    if (input == "Reset"){
        inputNumber.innerText = 0 ;
        outputNumber.innerText = 0 ;
        document.querySelector (".dash").innerText = "" ;
        document.querySelector (".dash1").innerText = "" ;
        outputName.innerText = "" ;
        namee.innerText = "" ;
        display.innerText = "" ;
    }

    else {
        display.innerText = "You Lost!"
        outputNumber.innerText = outputNum += 1;
        // document.body.style.backgroundColor = "" ;
    }
}

allInputIcon.forEach((select) => {
    select.addEventListener("click" , handleClick ) ;
})
