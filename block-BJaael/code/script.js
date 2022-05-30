
let parentElm = document.querySelector('.boxes') ;


for (let i = 0; i < 500; i++) {
    let div = document.createElement("div");
    div.classList.add("box");
    let h3 = document.createElement("h3");
    let randomNo = Math.floor (Math.random()* 999);
    h3.innerText = randomNo;

    div.append(h3);
    parentElm.append(div);
}




function generateRandomColor() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')' ;
    return newRgb
}




let allBoxes = document.querySelectorAll ('.box')

function handleMouseMove() {
    allBoxes.forEach ((box) =>{
    box.style.backgroundColor = generateRandomColor()
    box.children[0].innerText = Math.floor (Math.random()* 999)
})
}
 
parentElm.addEventListener ("mousemove" , handleMouseMove )

