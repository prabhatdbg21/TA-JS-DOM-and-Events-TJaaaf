/*
let parentElm = document.querySelector('.img') ;


for (let i = 0; i < 100; i++) {
parentElm.innerHTML =
`
<div class="each-box">
<p>5</p>
</div>
`


}
*/



function generateRandomColor() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')' ;
    return newRgb
}




 let img = document.querySelector ('.img')
 let eachbox = document.querySelectorAll ('.each-box')
 


img.addEventListener ("mousemove" , function () {
    
    eachbox.forEach((each) =>{
    each.style.backgroundColor = generateRandomColor();
    num = document.querySelector ('.number')
    num.innerText = Math.floor(Math.random() * 999)
})
})