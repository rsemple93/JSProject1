let AddBtn = document.getElementById('add')
let SubtractBtn = document.getElementById('subtract');
let input = document.querySelector('input');

AddBtn.addEventListener('click', () =>{
	input.value = parseInt(input.value) + 1;
});

SubtractBtn.addEventListener('click', () =>{
	input.value = parseInt(input.value) - 1;
});