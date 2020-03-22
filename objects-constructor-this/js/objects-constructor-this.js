// Object Literal -----------------------------------

const client = {
    name: 'Juan',
    founds: 200,
    clientType: function() {
        let type;
        if (this.founds > 1000) {
            type = 'Gold';
        } else if (this.founds > 5000) {
            type = 'Patino'
        } else {
            type = 'Normal'
        }
        return type;
    }
}
console.log(client.founds);

//Aternative method (like python class) OOP----------------

function Client(name = 'someOne', founds = 0, clientType = 'Normal') {
    this.name = name;
    this.founds = founds;
    this.clientType = function() {
        let type;

        if (this.founds > 1000) {
            type = 'Gold';
        } else if (this.founds > 5000) {
            type = 'Patino'
        } else {
            type = 'Normal'
        }
        return type;
    }
}

const client1 = new Client('Juan', 100000);
const client2 = new Client('Tefa', 2000);
console.log(client1);
console.log(client1.clientType());

//String

const name1 = 'Pepe';
const name2 = new String('Pepe');
console.log(name1);
console.log(name2);

// Numbers
const nume1 = 20;
const nume2 = new Number(20);
console.log(nume1);
console.log(nume2);

//booleans
const bol1 = true;
const bol2 = new Boolean(true);
console.log(bol1);
console.log(bol2);

// functions

const funcion1 = function(a, b) {
    return a + b;
}

const functon2 = new Function('a', 'b', 'return a + b');

console.log(funcion1(1, 2));
console.log(functon2(5, 3));

//objects

const person1 = {
    name: 'Juan'
}
const person2 = new Object({ name: 'Juan' });

console.log(person1);
console.log(person2);


// Arrays
const array1 = [1, 2, 3, 4];
const array2 = new Array([1, 2, 3, 4]);

console.log(array1);
console.log(array2);