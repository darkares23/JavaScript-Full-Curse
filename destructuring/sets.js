let cart = new Set();

cart.add('camisa');
cart.add('Disco');
cart.add('manzana');

console.log(cart);

// comprove a value exist
console.log(cart.has('Disco'));
// delete from the set
cart.delete('camisa');
console.log(cart);

// Iterate set
cart.forEach((product, index) => {
	console.log(`${index} : ${product}`);
})

// convert set to array

const arrayCart = [...cart];
console.log(arrayCart);
//Clean a set
cart.clear();
console.log(cart);