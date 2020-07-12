for (let i = 0; i < 5; i++) {
	console.log(i);
}

function createiterator(cart) {
	let i = 0;
	return {
		next: () => {
			let end = (i <= cart.lenght);
			let value = !end ? cart[i++] : undefined;

			return {
				end: end,
				value: value
			}
		}
	}
}
const cart = ['p1', 'p2', 'p3', 'p4'];

const iterateCart = createiterator(cart);
console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());
console.log(iterateCart.next());