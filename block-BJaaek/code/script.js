let first = document.querySelector('.first');
let second = document.querySelector(".second");

function makeColor() {
    var arr = [];
    for (let i = 0; i < 3; i++) {
        var num = Math.floor(Math.random() * 256);
        arr.push(num);
    }
    var newRgb = 'rgb(' + arr[0] + ',' + arr[1] + ',' + arr[2] + ')' ;
    return newRgb
}

first.addEventListener( "click" , function () {
    var newColor = makeColor()
    first.style.backgroundColor = newColor ;
});

second.addEventListener( "mousemove" , function () {
    var newColor = makeColor()
    second.style.backgroundColor = newColor ;
});