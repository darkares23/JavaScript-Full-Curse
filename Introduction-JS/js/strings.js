/*
let name = prompt('Whats your name?');
let edad = prompt('Whats your age?');
document.getElementById('app').innerHTML = `Welcome ${name} of ${edad} years old`;
*/

let leaning = 'learning tecnonolgies of IT',
	tec = 'JavaScript';

console.log(`${leaning} ${tec}`); /* String literals*/
console.log(leaning.length);
console.log(leaning.toUpperCase());
console.log(leaning.toLowerCase());
console.log(leaning.indexOf('IT'));
console.log(leaning.slice(-5));
console.log(leaning.split(' '));
console.log(leaning.replace(' ', '+'));
console.log(leaning.includes('IT'));

let tecno = 'javasscript';
console.log(tecno.repeat(4));
