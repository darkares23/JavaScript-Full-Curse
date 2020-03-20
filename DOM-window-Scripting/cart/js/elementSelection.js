// Get element by Id
let elemento;
let encabezado;

elemento = document.getElementById('header');
console.log(elemento);

encabezado = document.getElementById('encabezado');


//CSS modification vy style js

encabezado.style.background = '#fff';
encabezado.style.color = '#353535';
encabezado.style.padding = '20px;'

encabezado.innerText = 'JuanSes Cursos'
console.log(encabezado);

// QUERY selector
//-------------------------------------
console.log('\n \n' + 'Query selector');

const encabezad = document.querySelector('#encabezado');

// applied css
encabezad.style.background = '#333';
encabezad.style.color = '#FFF';
encabezad.style.padding = '25px';
encabezad.innerText = 'JuanSes best Curses ever'
console.log('by ID: ');
console.log(encabezad);

//also query selector can select from classes
const encabezadi = document.querySelector('.encabezado');
encabezadi.style.borderColor = 'red';
encabezadi.style.border = '10px';

console.log('by CLASS: ');
console.log(encabezadi);

const encabeza_link = document.querySelector('.enlace');
console.log('by enlace: ');
console.log(encabeza_link);

// Always return the first elemnte witrh the id or class no matter there werer various with the same name

let enlace;

enlace = document.querySelector('#principal a:first-child');
enlace = document.querySelector('#principal a:nth-child(3');
//enlace = document.querySelector('#principal a:last-child');

console.log(enlace);

// Multiple element selection
//-------------------------------------

//let links = document.getElementsByClassName('enlace');
//let links = document.getElementsByClassName('enlace')[3];
let links = document.getElementsByTagName('a');
links[18].style.color = 'red';

//links = links[2];

//links.style.background = '#333';
// You an make also diferent style changes

console.log(links);

const linkList = document.querySelector('#principal'). getElementsByClassName('enlace');
console.log(linkList);

//Query selector all
//-------------------------------------
const links1 = document.querySelectorAll('#principal .enlace');

console.log(links1);

//Select odds links to change styles
const links2 = document.querySelectorAll('#principal a:nth-child(odd)');

links2.forEach(function(odd){
	odd.style.backgroundColor = 'red';
	odd.style.color = '#fff';
});
console.log(links2);






