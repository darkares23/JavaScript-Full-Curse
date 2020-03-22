//Create class

class Client {
    constructor(name = 'None', lastName = 'None', balance = 0) {
        this.name = name;
        this.lastName = lastName;
        this.balance = balance;
    }

    printFounds() {
        return `Hello ${this.name} your balance is ${this.balance}`;
    }

    retirefounds(retire) {
        return `Yor retire: ${retire}\nyour new balce is: ${this.balance -= retire}`;
    }

    clientType() {
        let type;

        if (this.balance > 1000 && this.balance < 5000) {
            type = 'Gold';
        } else if (this.balance > 5000) {
            type = 'Patino'
        } else {
            type = 'Normal'
        }
        return type;
    }

    //Don't need new instances but yes the class name
    static welcome() {
        return `
            Welcome to the BMS `;
    }

}
const newClient = new Client('Juan', 'Ocampo', 50000);

console.log(newClient);
console.log(Client.welcome());

console.log(newClient.printFounds());
console.log(newClient.clientType());
console.log(newClient.retirefounds(203));

console.log(newClient.printFounds());

//Class ihnerence

class Company extends Client {
    constructor(name, balance, tel, type) {
        //got to parent constructor
        super(name, balance);
        //this donst exist in parent constructor
        this.tel = tel;
        this.type = type;
    }
    static welocme() {
        return `Welocome for your company BMS`;
    }
}

const company = new Company('Pandore', 100000000, 2569324, 'International Conglomerade ');
const company2 = new Company('hello', 0, 10000, 2569324, 'International Conglomerade');
console.log(company);
console.log(company2);

console.log(Company.welcome());