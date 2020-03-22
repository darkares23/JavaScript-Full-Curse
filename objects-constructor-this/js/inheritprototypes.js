// Prototypes ES6
function Client(name = 'someOne', founds = 0) {
    this.name = name;
    this.founds = founds;
}

// Prototype to print name and founds
Client.prototype.clientNameFounds = function() {
    return `name: ${this.name}, Your founds are: ${this.founds},
    ClientType : ${this.clientType}`;
}

const client1 = new Client('Juan', 100000);

console.log(client1);

// Bank for Company

function Company(name = 'None', founds = 0, tel, type) {
    //inherit a prototype
    Client.call(this, name, founds);

    this.tel = tel;
    this.type = type;
}
Company.prototype = Object.create(Client.prototype);

const company = new Company('Udemy', 10000000, 572325424, 'Education');

console.log(company);
console.log(company.clientNameFounds());