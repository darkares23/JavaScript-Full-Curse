// for (let index = 0; index < array.length; index++) {
//	const element = array[index];
for(let i = 1; i <= 6 ; i++) {
	console.log(`Number is: ${i}`);
	if (i == 5) {
		console.log(`now we finish the loop in the value of i == ${i} no in 6`);
		break;
	}
}
for(let i = 1; i <= 6 ; i++) {
	if (i % 2 == 0) {
		console.log(`this a par number: ${i}`);
	} else {
		console.log(`this is odd number: ${i}`);
	}
}

const products = ['productA', 'productB', 'productC', 'productD', 'productE'];

for(let h = 0; h < products.length; h++) {
	console.log(`Your printed product is ${products[h]}`);
}
// do {} while (condition); at least one time the code is executed
i = 0;
do {
	console.log(`do while loop: ${i}`);
	i++;
} while (i < 0);

// array.forEach(element => {});
const pendings = ['Homework', 'run', 'project', 'learn js'];

pendings.forEach(function(pendient, index) {
	console.log(` index ${index}: ${pendient}`);
});

//map
const cart = [
	{id: 1, producto: 'Book'},
	{id: 1, producto: 'Book1'},
	{id: 1, producto: 'Book2'},
	{id: 1, producto: 'Book3'}
];
const productName = cart.map(function(cart) {
	return cart.producto;
}); 
console.log(productName);

const ally = {
	product: 'Book',
	product1: 'Book1',
	product2: 'Book2'
}

for (let items in ally) {
	console.log(`${items}: ${ally[items]}`);
}