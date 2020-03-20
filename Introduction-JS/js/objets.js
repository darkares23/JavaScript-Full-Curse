const person = {
	name: 'Miguel',
	lastName : 'Martinez',
	proffession: 'Enginner',
	age: 20,
	email: 'mm@gmail.com',
	music: ['trance', 'tecno'],
	home: {
		city: 'Medallo',
		country: 'Colombia'
	},
	bornDate: function() {
		return 'Born year: ' + String(new Date().getFullYear() - this.age);
	}
}
console.log(person.music[1]);
person.music.push('house');
console.log(person.music);
console.log(person.home.country);
console.log(person.bornDate());
console.log(person);

// Array of objects
const autos = [
	{model: 'Munstang', motor: 6.3},
	{model: 'Camaro', motor: 5.6},
	{model: 'bmw', motor: 4.5}
];
console.log(autos[0]);
console.log(autos);

for (let i = 0; i < autos.length; i++) {
	console.log(`${autos[i].model} ${autos[i].motor}`);
} 