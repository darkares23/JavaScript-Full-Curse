const cities = ['london', 'Ny', 'madrid', 'paris'];
const ordes = new Set([123, 231, 131, 102]);
const data = new Map();
data.set('name', 'juan');
data.set('profesion', 'web developer');

console.log(cities);
console.log(ordes);
console.log(data);

//Entries iterator

for( let entry of cities.entries()) {
	console.log(entry);
}
for( let orderes of ordes.entries()) {
	console.log(orderes);
}for( let dataas of data.entries()) {
	console.log(dataas);
}

//Entries of map
for(let i of data.entries()) {
	console.log(i);
};
for(let i of data.values()) {
	console.log(i);
};
for(let i of data.keys()) {
	console.log(i);
};

const mesnaje = 'Learning Js';
for(let char of mesnaje) {
	console.log(char);
}

// iterator for html tags
const links_html = document.getElementsByTagName('a');
for(let link of links_html) {
	console.log(link.href);
	
}