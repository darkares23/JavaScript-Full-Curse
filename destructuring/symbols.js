const simbolo = Symbol();
const simbolo2 = Symbol(' Description aqui');

console.log(simbolo2);

let name = Symbol(),
	lastName = Symbol();

let person = {};

person.name = 'Juan';
person[name] = 'Juan';
person[lastName] = 'Ocampo';
person.saldo = 1000;
person.type = 'platinumn';

for (let i in person) {
	console.log(`${i} : ${person[i]}`);
}
console.log(person);