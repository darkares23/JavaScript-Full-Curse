// scope of your code inside javascript diferent kinds.
//this variables are global scope

var a = 'a';
let b = 'b';
const c = 'c';

function functionscope() {
	var a = 'A';
	let b = 'B';
	const c = 'C';
	console.log('FUNCION SCOPE ' + a,b,c);
}
functionscope();
//block scope
if (true) {
	var a = 'AA';
	let b = 'BB';
	const c = 'CC';
	console.log('block SCOPE ' + a,b,c);
}
// If you use the key word var to define variable thge scope will 
// be global and thats not good idea, you must use cont or let.



console.log('Globals variables: ' + a,b,c);
