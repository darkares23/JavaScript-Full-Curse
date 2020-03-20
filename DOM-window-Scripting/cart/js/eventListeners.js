// Event listener click to search bar

document.querySelector('#submit-buscador').addEventListener('click', button_execution);

function button_execution(event){
	event.preventDefault();
	let element;
	element = event;
	
	element = event.target;
	element = event.target.id;
	element = event.target.className;
	console.log(element);
	console.log('Execute function from button');
}

//Mouse event to erase cart
const header = document.querySelector('#encabezado');
const links = document.querySelectorAll('.enlace');
const button = document.querySelector('#vaciar-carrito');

//Click
//--------------------------------------------------------------------------
/*
button.addEventListener('click', event_obtain);
function event_obtain(event){
	console.log(`EVENT: ${event.type}`);
}
*/
// double click
//button.addEventListener('click', event_obtain);
//button.addEventListener('dblclick', event_obtain);
//button.addEventListener('mouseleave', event_obtain);
//button.addEventListener('mouseenter', event_obtain);
//button.addEventListener('mouseout', event_obtain);
//button.addEventListener('mousedown', event_obtain);
//button.addEventListener('mouseup', event_obtain);
//button.addEventListener('mousemove', event_obtain);
button.addEventListener('mouseover', event_obtain);

function event_obtain(event){
	console.log(`EVENT: ${event.type}`);
}

// Imputs events like search engines
// --------------------------------------------------------------------------

const search = document.querySelector('#buscador');
//search.addEventListener('keydown', event_obtain1);
//search.addEventListener('keypress', event_obtain1);
//search.addEventListener('focus', event_obtain1);
//search.addEventListener('blur', event_obtain1);
//search.addEventListener('cut', event_obtain1);
//search.addEventListener('copy', event_obtain1);
//search.addEventListener('paste', event_obtain1);
search.addEventListener('input', event_obtain1);
search.addEventListener('change', event_obtain1);

function event_obtain1(event){
	//document.querySelector('#encabezado').innerText = search.value;
	console.log(`EVENT: ${event.type}`);
}

// Event Bubbling
//--------------------------------------------------------------------------

const card = document.querySelector('.card');
const infoCurse = document.querySelector('.info-card');
const add_to_cart = document.querySelector('.agregar-carrito');

card.addEventListener('click', function(e) {
	console.log('Click en Info Card');
	e.stopPropagation();
	//prevent to propagar de event when click
});
infoCurse.addEventListener('click', function(e) {
	console.log('Click en Info Curso');
	e.stopPropagation();
	//prevent to propagar de event when click
});
add_to_cart.addEventListener('click', function(e) {
	console.log('Click en Agregar a carrito');
	e.stopPropagation();
});

//Delegation
//--------------------------------------------------------------------------

document.body.addEventListener('click', deleteElement);

function deleteElement(e) {
	e.preventDefault();
	
	/*if(e.target.classList.contains('borrar-curso')) {
		console.log('yes');
	} else {
		console.log('no');
		
	}*/
	if(e.target.classList.contains('borrar-curso')) {
		console.log(e.target.parentElement.parentElement.remove);
	}
	if(e.target.classList.contains('agregar-carrito')) {
		console.log('Curso agregado');
	}
}