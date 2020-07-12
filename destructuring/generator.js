const {
	captureRejectionSymbol
} = require("events");

function* createGenerator() {
	yield 1;
	yield 'name';
	yield 3 + 3;
	yield true;
}

const iterator = createGenerator();
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);

function* newGenerator(cart) {
	for (let i = 0; i < cart.length; i++) {
		yield cart[i];
	}
}
let cart = new Set();

cart.add('camisa');
cart.add('Disco');
cart.add('manzana');
const newarray = ['p1', 'p2', 'p3', 'p4']
let iterato2 = newGenerator(newarray);
console.log(iterato2.next().value);
console.log(iterato2.next().value);
console.log(iterato2.next().value);
console.log(iterato2.next().value);
console.log(iterato2.next().done);