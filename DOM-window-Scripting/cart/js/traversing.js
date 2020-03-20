//traversing parent to child
const navegation = document.querySelector('#principal');
const bar = document.querySelector('.barra');
const card = document.querySelectorAll('.card');

// change a child from the parentand change elements
console.log(navegation.children[0].textContent = 'New Link');
/*
console.log(navegation.children[0].nodetype);
Node types
type 1 = elements
type 2 = Atributes
type 3 = Text Nodes
type 8 = Comments
type 9 = Documents
type 10 = doctype
*/
console.log(bar.children[0].children[0]);
console.log(card[0].firstElementChild);

//Traversing child to parent
//---------------------------------------------------

const links = document.querySelectorAll('.enlace');

console.log(links[0].parentElement.parentElement.parentElement);

const curses = document.querySelectorAll('.card');

console.log(curses[0].parentElement.parentElement.parentElement.children[0].textContent = 'Hello');

// siblings

const links2 = document.querySelectorAll('.enlace');
console.log(links2[4].previousElementSibling.previousElementSibling);
console.log(links2[0].nextElementSibling.nextElementSibling.parentElement.children[4]);
