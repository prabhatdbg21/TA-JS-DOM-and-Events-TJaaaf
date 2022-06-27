let bigDiv = document.querySelector ('.all-box');
let newbox = document.querySelector ('.newbox')
got.houses.forEach((house) => {
    house.people.forEach(peoples => {
            let article = document.createElement('article');
            article.classList.add('box')
        
            let div = document.createElement('div');
            div.classList.add('flex-justify-content')
            let img = document.createElement('img');
            img.src = peoples.image;
            div.append (img)
        
            let h2 = document.createElement('h2');
            h2.innerText = peoples.name ;
            
        
            let p = document.createElement('p');
            p.innerText = peoples.description;
            
            let a = document.createElement('a');
            a.innerText = `KNOW MORE!` ;
            a.href = peoples.wikiLink;
        
            article.append (div , h2 ,p , a);
        
            bigDiv.append (article)

    });
});

function search (event){
    bigDiv.classList.add ('displayNone')
    console.dir (event.target.value)
    got.houses.forEach((house) => {
        house.people.forEach(peoples => {
                let article = document.createElement('article');
                article.classList.add('box')
            
                let div = document.createElement('div');
                div.classList.add('flex-justify-content')
                let img = document.createElement('img');
                img.src = peoples.image;
                div.append (img)
            
                let h2 = document.createElement('h2');
                h2.innerText = peoples.name ;
                
            
                let p = document.createElement('p');
                p.innerText = peoples.description;
                
                let a = document.createElement('a');
                a.innerText = `KNOW MORE!` ;
                a.href = peoples.wikiLink;
            
                article.append (div , h2 ,p , a);
            
                newbox.append (article)
    
        });
    });
}

let input = document.querySelector ('input')
input.addEventListener ("keyup" , search)


let starks = document.querySelector ('.starks') 
let lannisters = document.querySelector ('.lannisters')
let baratheons = document.querySelector ('.baratheons')
let targaryens = document.querySelector ('.targaryens')
let greyjoys = document.querySelector ('.greyjoys')
let tyrells = document.querySelector ('.tyrells')
let tullys = document.querySelector ('.tullys')
let redwyne = document.querySelector ('.redwyne')
let freys = document.querySelector ('.freys')
let arryns = document.querySelector ('.arryns')
let dothrakis = document.querySelector ('.dothrakis')

let getHouses = got.houses 




function people(peopl) {
    bigDiv.classList.add ('displayNone')
    let article = document.createElement('article');
    article.classList.add('box')

    let div = document.createElement('div');
    div.classList.add('flex-justify-content')
    let img = document.createElement('img');
    img.src = peopl.image;
    div.append (img)

    let h2 = document.createElement('h2');
    h2.innerText = peopl.name ;
    

    let p = document.createElement('p');
    p.innerText = peopl.description;
    
    let a = document.createElement('a');
    a.innerText = `KNOW MORE!` ;
    a.href = peopl.wikiLink;

    article.append (div , h2 ,p , a);

    newbox.append (article)
}


function handleClick (event) { 
    got.houses[0].people.forEach(peopl => {  people(peopl) });
}

function handleClicka (event) { 
    console.log (event.target)
    got.houses[1].people.forEach(peopl => {  people(peopl) });
}

function handleClick2 (event) { 
    got.houses[2].people.forEach(peopl => {  people(peopl) });
}

function handleClick3 (event) { 
    got.houses[3].people.forEach(peopl => {  people(peopl) });
}

function handleClick4 (event) { 
    got.houses[4].people.forEach(peopl => {  people(peopl) });
}

function handleClick5 (event) { 
    got.houses[5].people.forEach(peopl => {  people(peopl) });
}

function handleClick6 (event) { 
    got.houses[6].people.forEach(peopl => {  people(peopl) });
}

function handleClick7 (event) { 
    got.houses[7].people.forEach(peopl => {  people(peopl) });
}

function handleClick8 (event) { 
    got.houses[8].people.forEach(peopl => {  people(peopl) });
}

function handleClick9 (event) { 
    got.houses[9].people.forEach(peopl => {  people(peopl) });
}

function handleClick10 (event) { 
    got.houses[10].people.forEach(peopl => {  people(peopl) });
}

starks.addEventListener ("click" , handleClick )
lannisters.addEventListener ("click" , handleClicka)
baratheons.addEventListener ("click" , handleClick2 )
targaryens.addEventListener ("click" , handleClick3)
greyjoys.addEventListener ("click" , handleClick4 )
tyrells.addEventListener ("click" , handleClick5 )
tullys.addEventListener ("click" , handleClick6 )
redwyne.addEventListener ("click" , handleClick7)
freys.addEventListener ("click" , handleClick8 )
arryns.addEventListener ("click" , handleClick9 )
dothrakis.addEventListener ("click" , handleClick10)

