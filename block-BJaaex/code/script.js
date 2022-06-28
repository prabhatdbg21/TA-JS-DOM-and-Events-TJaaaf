// Card data
const cardsArray = [
    {
      name: 'shell',
      img: 'img/blueshell.png',
    },
    {
      name: 'star',
      img: 'img/star.png',
    },
    {
      name: 'bobomb',
      img: 'img/bobomb.png',
    },
    {
      name: 'mario',
      img: 'img/mario.png',
    },
    {
      name: 'luigi',
      img: 'img/luigi.png',
    },
    {
      name: 'peach',
      img: 'img/peach.png',
    },
    {
      name: '1up',
      img: 'img/1up.png',
    },
    {
      name: 'mushroom',
      img: 'img/mushroom.png',
    },
    {
      name: 'thwomp',
      img: 'img/thwomp.png',
    },
    {
      name: 'bulletbill',
      img: 'img/bulletbill.png',
    },
    {
      name: 'coin',
      img: 'img/coin.png',
    },
    {
      name: 'goomba',
      img: 'img/goomba.png',
    },
  ]

// Duplicate array to create a match for each card
let gameGrid = cardsArray.concat(cardsArray)

// Randomize game grid on each load
gameGrid.sort(() => 0.5 - Math.random())

// Grab the div with an id of root
const game = document.getElementById('game')

// Create a section with a class of grid
const grid = document.createElement('section')
grid.setAttribute('class', 'grid')

// Append the grid section to the game div
game.appendChild(grid)

// For each item in the gameGrid array...
gameGrid.forEach((item) => {
    // Create a div
    const card = document.createElement('div')
  
    // Apply a card class to that div
    card.classList.add('card')
  
    // Set the data-name attribute of the div to the cardsArray name
    card.dataset.name = item.name

    // Create front of card
    const front = document.createElement('div')
    front.classList.add('front')
  
    // Create back of card, which contains
    const back = document.createElement('div')
    back.classList.add('back')
    // Apply the background image of the div to the cardsArray image
    back.style.backgroundImage = `url(${item.img})`
  
    // Append the div to the grid section
    grid.appendChild(card)
    card.appendChild(front)
    card.appendChild(back)
})

let firstGuess = ''
let secondGuess = ''
let count = 0
let previousTarget = ''
let delay = 1200

function match ()  {
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.add('match')
    })
}

function resetGuesses () {
    firstGuess = ''
    secondGuess = ''
    count = 0
  
    var selected = document.querySelectorAll('.selected')
    selected.forEach((card) => {
      card.classList.remove('selected')
    })
  }

// Add event listener to grid
grid.addEventListener('click', function (event) {
    // The event target is our clicked item
    let clicked = event.target
    console.log (clicked.nodeName)
    
    // Do not allow the grid section itself to be selected; only select divs inside the grid
    if (clicked.nodeName === 'SECTION' || clicked === previousTarget || clicked.parentNode.classList.contains('selected') ) {
        return
    }
  
    if (count < 2) {
        count++
        if (count === 1) {
          // Assign first guess
          firstGuess = clicked.parentNode.dataset.name
          console.log(firstGuess)
          clicked.parentNode.classList.add('selected')
        } else {
          // Assign second guess
          secondGuess = clicked.parentNode.dataset.name
          console.log(secondGuess)
          clicked.parentNode.classList.add('selected')
        }
        // If both guesses are not empty...
        if (firstGuess !== '' && secondGuess !== '') {
          // and the first guess matches the second match...
          if (firstGuess === secondGuess) {
            setTimeout(match, delay)
            setTimeout(resetGuesses, delay)
          } else {
            setTimeout(resetGuesses, delay)
          }
        }
        // Set previous target to clicked
        previousTarget = clicked;
    }
  })