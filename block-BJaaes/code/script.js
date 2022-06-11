let form = document.querySelector ("form") ;

let usernameError = "" ;

function split (str){
    return str.split("").some(e => Number(e))
}

function handleSubmit (event){
    event.preventDefault();

    let usernameElm = event.target.elements ;
 

    if(usernameElm.username.value.length < 4){
        console.log (usernameElm.username.value.length)
        usernameError = "username can't be less than 4 characters"
        usernameElm.username.nextElementSibling.innerText = usernameError
        usernameElm.username.classList.add("error");
    }
    else if (split(usernameElm.name.value)){
        usernameError = "You can't use number in the name field"
        usernameElm.name.nextElementSibling.innerText = usernameError
        usernameElm.name.classList.add("error")
    }
    else if (usernameElm.email.value.length < 6){
        usernameError = " email can't be less than 6 characters"
        usernameElm.email.nextElementSibling.innerText = usernameError
        usernameElm.email.classList.add("error")
    }
    else if (usernameElm.numbe.value.length < 7){
        usernameError = "  Phone number can contain min 7 numbers "
        usernameElm.numbe.nextElementSibling.innerText = usernameError
        usernameElm.numbe.classList.add("error")
    }
    else if (event.target.elements.password.value !== event.target.elements.confirmpassword.value  ){
        usernameError = " password does not match "
        usernameElm.confirmpassword.nextElementSibling.innerText = usernameError
        usernameElm.confirmpassword.classList.add("error")
    }
    else{
        usernameError = "" ;
        usernameElm.username.classList.add("success");
        usernameElm.name.classList.add("success") ;
        usernameElm.email.classList.add("success") ;
        usernameElm.numbe.classList.add("success") ;
        usernameElm.confirmpassword.classList.add("success") ;
    }
    
}

form.addEventListener ("submit" , handleSubmit) ;