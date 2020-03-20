const age = 18;

if(age >= 18) {
	console.log('you can enter the site');
	
} else {
	console.log('Yo can\'t enter to the site');
}
// review if a variable has a value
const points = 1000;
if (points) {
	console.log(`Your points was ${points}`);
} else {
	console.log(`theres no ponts`);
}
let cash = 500,
	totalCart = 300;

if (cash > totalCart) {
	console.log('Payment correct');
} else {
	console.log('Insuficient founds');
}

// Else if () {}
let hour = 20;
if (hour >= 8 && hour <= 20) {
	console.log('good day');
} else if(hour > 20) {
	console.log('Good afternoom');
} else if(hour == 18 || hour == 17){
	console.log('good hour');
}
// Ternary operators
const login = true;
console.log(login == true ? 'you are logged' : 'not logged');

// Swithch
const paymentmethod = 'Cash'
switch (paymentmethod) {
	case 'Cash':
		console.log(`Your payment was with ${paymentmethod}`);
		break;
	case 'Credit Card':
		console.log(`Your payment was with ${paymentmethod}`);
		break;

	default:
		console.log(`Not sopprted ${paymentmethod}`);
		break;
}

let mes;
switch (new Date().getMonth()) {
	case 0:
		mes   = 'january';
		break;
	case 1:
		mes   = 'febreuray';
		break;
	case 2:
		mes   = 'march';
		break;
	case 3:
		mes   = 'april';
		break;
	case 4:
		mes   = 'may';
		break;
	case 5:
		mes   = 'jun';
		break;
	case 6:
		mes   = 'july';
		break;
	case 7:
		mes   = 'Augost';
		break;
	case 8:
		mes   = 'september';
		break;
	default:
		break;
}
console.log(`this is the month: ${mes}`);


