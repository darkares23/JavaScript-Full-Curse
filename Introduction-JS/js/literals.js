const product1 = 'pizza',
	prize1 = 30,
	product2 = 'hotDog',
	prize2 = 40;

//old type of literals
let html;
/*html = '<ul>' +
 	'<li>Order ' + product1 + '</li>' + 
 	'<li>Prize ' + prize1 + '</li>' + 
 	'<li>Order ' + product2 + '</li>' + 
 	'<li>Prize ' + prize2 + '</li>' +
 	'<li>Total ' + (prize1 + prize2) + '</li>' +
	 '</ul>';
document.getElementById('app').innerHTML = html;
console.log(html); 
*/
html = `
	<ul>
		<li>Order: ${product1} </li>
		<li>Prize: ${prize1} </li>
		<li>Order: ${product2} </li>
		<li>Prize: ${prize1} </li>
		<li>Total: ${total(prize1, prize2) } </li>

	</ul>
`;
function total(prize1, prize2) {
		return prize1 + prize2;
}
console.log(html); 
document.getElementById('app').innerHTML = html;
