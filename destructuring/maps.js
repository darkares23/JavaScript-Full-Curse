let client = new Map();

client.set('name', 'Juan');
client.set('type', 'gold');
client.set('founds', 3000);

// obtain values

// maps methods
console.log(client.size);
console.log(client.get('name'));
console.log(client.has('name'));
console.log(client.delete('name'));
console.log(client.size);
console.log(client);
client.clear();
console.log(client);

const pacient = new Map([
	['name', 'j'],
	['room', 400]
]);
console.log(pacient);
pacient.set('name', 'juan');
pacient.set('room', 504);

console.log(pacient);