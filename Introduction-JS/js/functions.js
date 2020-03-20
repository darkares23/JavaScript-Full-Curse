/*
console.log('hello World');
alert('hi');
prompt('And now?')
*/

function say_hi(uname) {
	if(uname == null) {
		uname = prompt('whats your name?');
		console.log(uname);
	}
	alert(`Welcome ${uname}`);
}
//say_hi('juan');
function sum(a, b) {
	return a + b;
}
console.log(sum(3,4));

function sum2(a = 0, b = 0) {
	return a + b;
}
console.log(sum2());
console.log(sum2(2));

//IIFE
(function(tecnology = 'js') {
	console.log(`leaening ${tecnology} in function IIFE'`);
})('Javascript');

const music1 = {
	reprocucction: function(id) {
		console.log(`Reproducing Music ${id}`)
	},
	pause: function() {
		console.log(`Pause Music`);
	}
}
music1.reprocucction();
music1.pause();
//Can create and erse methods outside the object:
music1.delete = function(id) {
	console.log(`Deleted song with ID: ${id}`)
}
music1.delete(2);