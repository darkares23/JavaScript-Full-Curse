let element;
// show all document of the DOM interactive
element = document;
// Show all elemnts like a array
/*
element = document.all;
console.log(element);
element = document.all[10];
console.log(element);

element = document.head;
console.log(element);

element = document.domain;
console.log(element);

element = document.body;
console.log(element);
*/
element = document.forms[0];
console.log(element);

element = document.forms[0].className;
console.log(element);
element = document.forms[0].classList;
console.log(element);
element = document.images;
element = document.images[2].getAttribute('src');

console.log(element);

// Scripts

element = document.scripts
element = document.images

console.log(element);

let imagenes = document.images,
	imagenesArr = Array.from(imagenes);
console.log(imagenesArr);

imagenesArr.forEach(function(imagen){
	console.log(imagen);

});
