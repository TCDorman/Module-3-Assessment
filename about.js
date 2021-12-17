console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	window.alert('form submitted successfully!');
}

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);

function giveCompliment(e) {
	e.preventDefault();

	window.alert('Hey, you are very smart for finding this easter egg :O')
}


const image = document.getElementById('"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkc40VaWkrQS-coTg0N1sFoDmUfk3tFS_TMw&usqp=CAU">')


let compliment = document.querySelector('image.src')
compliment.addEventListener('mouseover', giveCompliment)