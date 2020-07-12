const exp1 = new RegExp('/abc/');
const exp2 = /abc/

console.log(exp1);
console.log(exp2);
console.log(typeof exp1);

let value, expReg;

expReg = /[0123456789]/;
value = 1992;

// date in a regular expression
expReg = /\d\d-\d\d-\d\d\d\d/;
value = '20-10-2020';

// Hour
expReg = /\d\d:\d\d/;
value = '10:30';

// hour am
expReg = /\d\d:\d\d \D\D/;
value = '10:30 AM';

expReg = /\d\d\d\d/;
value = '1211134a';

expReg = /\d+/;
value = 'a1211134a';

expReg = /[̣̣^1-6]/;
value = 'a1211134a';

// key sintax
expReg = /\d{1,2}-\d{1,2}-\d{4}/
value = '23-02-1991';

//letters or numbers
expReg = /\w+/;
value = 'Mensaje de prueba 2323';
value = 1234;
value = ' ';
//only number
expReg = /\d+/;
value = 1234;

expReg = /([0-9])\w+/;
value = 1234;

expReg = /([A-Z])\w+/;
value = 'JUAN';

expReg = /([a-z])\w+/;
value = 'juan';


console.log(expReg.test(value));