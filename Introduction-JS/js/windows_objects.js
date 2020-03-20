// Promt
/*const opttion = prompt();
console.log(`Delete? ${opttion}`);
if (confirm ('delete ?')) {
	console.log('deleted');
	
} else {
	console.log('deleted');
}
*/

let hight = window.outerHeight,
	width = window.outerWidth;

	console.log(hight);
	console.log(width);

// windows size only the html
console.log(`Windows hight ${window.innerHeight}`);
console.log(`Windows width ${window.innerWidth}`);
let location1 = window.location;
let port_ = window.location.port;
console.log(location);
console.log('port is:' + port_);

// redirectioning

/*redirect = confirm('do you wanto to be redirected to facebook?');
if(redirect == true) {
	window.location.href = 'http://facebook.com';
}
*/

//history object

//window.history.go(-1);

console.log(window.navigator);
// change lenguage
console.log(window.navigator.language);
console.log(window.navigator.userAgent);
