// Create Elements
const link = document.createElement('a');

//Add class

link.className = 'enlace';

// Add id
link.id = 'new-id';

//add atribute
link.setAttribute('href', '#');

//add text
link.textContent = 'new link';

//add the link to the html in the last position
document.querySelector('#secundaria').appendChild(link);

console.log(link);