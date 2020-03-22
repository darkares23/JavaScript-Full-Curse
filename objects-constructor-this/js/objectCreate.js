// Object Create

const Client = {
    printFounds: function() {
        return `Hello ${this.name} you foounds are ${this.founds}`;
    },
    retirefounds: function(retire) {
        return this.founds -= retire;
    }
}
const mary = Object.create(Client);
mary.name = 'Mary';
mary.founds = 1000;

mary.retirefounds(277);

console.log(mary);
console.log(mary.printFounds());