// Prototypes ES6

function Client(name = 'someOne', founds = 0, clientType = 'Normal') {
    this.name = name;
    this.founds = founds;
}
//Prototype for client type
Client.prototype.clientType = function() {
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

// Prototype to print name and founds
Client.prototype.clientNameFounds = function() {
    return `name: ${this.name}, Your founds are: ${this.founds},ClientType : ${this.clientType}`;
}

//Withdraw founds
Client.prototype.witdrawfounds = function(retiro) {
    return this.founds -= retiro;
}

const client1 = new Client('Juan', 100000);
const client2 = new Client('Tefa', 2000);
const client3 = new Client('Neider', 50);

client1.witdrawfounds(300);

console.log(client1);
console.log(`Client2 Type: ${client2.clientType()}`);
console.log(client3);

//inherit a prototype