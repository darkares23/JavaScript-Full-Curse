// Modify elements of the dom

const newHeading = document.createElement('h2');

newHeading.id = 'encabezado';
newHeading.appendChild(document.createTextNode('Los Mejores Cursos'))

// last elemnet will be remplaced
const last = document.querySelector('#encabezado');

const ele_parent = document.querySelector('#lista-cursos');

//replace
ele_parent.replaceChild(newHeading, last);

console.log(last.parentElement);

// DELETE ELEMETS
// ---------------------------------------------------------------

const links = document.querySelectorAll('.enlace');
const navi = document.querySelector('#principal');

links[0].remove();
navi.removeChild(links[1]);

console.log(links);
console.log(navi);


const firstList = document.querySelector('.enlace');
let elemnt;

// obtain css class
elemnt = firstList.className;
elemnt = firstList.classList.add('nueva-clase');
elemnt = firstList.classList.remove('nueva-clase');
elemnt = firstList.classList;


// read atributes modify and remove

elemnt = firstList.getAttribute('href');
elemnt = firstList.setAttribute('href', 'http://facebook.com');
elemnt = firstList.setAttribute('data-id', 20);
elemnt = firstList.hasAttribute('data-id');
elemnt = firstList.removeAttribute('data-id');

console.log(elemnt);
