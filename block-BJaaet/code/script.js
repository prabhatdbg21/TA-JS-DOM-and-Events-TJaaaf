let movie = document.querySelector (".movie")
let ul = document.querySelector ("ul")

function handleEvent (event){

    if (event.key === "Enter"){
        if(movie.value === ""){
            return
        }
    
        let div = document.createElement ("div")
        div.classList.add("flex")
        let input = document.createElement("input")
        input.classList.add ("checkbox")
        input.type = ("checkbox")
        let li = document.createElement ("li")
        li.innerText = movie.value
        let i = document.createElement("i")
        i.classList = `fa fa-cross`
        div.append(input, li , i)
        ul.append (div)
    
        function remove (event){
            div.classList.add ("display")
        }
    
        i.addEventListener ("click" , remove)
    }
}

movie.addEventListener ("keyup" ,handleEvent)