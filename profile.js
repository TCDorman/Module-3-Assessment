
let colorButton = document.querySelector('button#color');

function ChangeColor(){
    document.getElementById('color').style.backgroundColor = 'Green'
}

function sayFavColor (){
    window.prompt('My favorite color is Green! What is yours?')
}

colorButton.addEventListener('click', sayFavColor)

let myFavPlace = document.querySelector('button#place')

function sayFavPlace(){
    window.prompt('My favorite place is Siesta Key, Florida. Where is yours?')
}

myFavPlace.addEventListener('click', sayFavPlace)

let myFavRitual = document.querySelector('button#ritual')

function sayFavRitual(){
    window.prompt('My favorit ritual is getting drinks with my old friends the day before Thanksgiving. How about you?')
}

myFavRitual.addEventListener('click', sayFavRitual)