let form = document.querySelector ("form") ;
let bigBox = document.querySelector (".bigBox")
let allFormControl = document.querySelectorAll (".form-control ")
let button = document.querySelector ("button")
let a = document.querySelector ("a")

let userInfo = {} ;

function handleSubmit (event) {
    event.preventDefault() ;

    let box = document.createElement ("div")
     a.classList.add ("hi")
    console.log (a)
    

    allFormControl.forEach ((formControl) =>{
        formControl.classList.add ("dis")
    })
    button.classList.add ("dis")

    console.log (form.elements.text.value)
    console.log (form.elements.mail.value)
    console.log (form.elements.gender.value)
    console.log (form.elements.color.value)
    console.log (form.elements.range.value)
    console.log (form.elements.drone.value)
    console.log (form.elements.terms.checked)


    let p1 = document.createElement ("h1")
    box.append (p1)
    p1.classList.add ("hello")
    p1.innerText = `Hello ${form.elements.text.value}`

    let p2 = document.createElement ("p")
    box.append (p2)
    p2.classList.add ("text")
    p2.innerText = `Email: ${form.elements.mail.value}`

    let p3 = document.createElement ("p")
    box.append (p3)
    p3.classList.add ("text")
    p3.innerText = `You Love: ${form.elements.gender.value}`

    let p4 = document.createElement ("p")
    box.append (p4)
    p4.classList.add ("text")
    p4.innerText = `Color: ${form.elements.color.value}`

    let p5 = document.createElement ("p")
    box.append (p5)
    p5.classList.add ("text")
    p5.innerText = `Rating: ${form.elements.range.value}`

    let p6 = document.createElement ("p")
    box.append (p6)
    p6.classList.add ("text")
    p6.innerText = `Book Genre: ${form.elements.drone.value}`

    let p7 = document.createElement ("p")
    box.append (p7)
    if( form.elements.terms.checked == true){
        p7.innerText = `You agree to Terms and Condition`
    } else {
        p7.innerText = `You do not agree to Terms and Condition`
    }


    bigBox.append (box)
}

form.addEventListener ("submit" , handleSubmit) ;