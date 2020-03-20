// Create arrays
const numbers = [10, 20, 30, 40, 50];
console.log(numbers); 

// strings array

const months = new Array('January', 'frebraury');
console.log(months);

// mix data type array
const mix = ['Hello', 20, true, undefined];
console.log(mix);
console.log(mix.length);
console.log(Array.isArray(months));
console.log(months[1]);

months[2] = 'March';
months.push('April');
console.log(months);

console.log(months.indexOf('April'));

//add begin of the arra
months.unshift('Month 0');
console.log(months);

//delete end of the array
months.pop();
console.log(months);
//delete start of the array
months.shift();
console.log(months);
//delete range indx
months.splice(1, 1);
console.log(months);
//reveser array
months.reverse();
// concat 2 arrays
let array1 = [1, 2, 3],
	array2 = [9, 8, 7];
console.log(array1.concat(array2));

//sorting array
const fruits = ['banana', 'apple', 'orange', 'pinaple'];
console.log(fruits);
console.log(fruits.sort());

arrayNumbers = [3, 9, 91, 92, 23, 25, 45, 21, 56, 1, 100, 10];
console.log(arrayNumbers);
console.log(arrayNumbers.sort());
arrayNumbers.sort(function(x, y) {
		return x - y;
});
console.log(arrayNumbers);
arrayNumbers.sort(function(x, y) {
		return y - x;
});
console.log(arrayNumbers);
const a_Numbers = [3, 9, 91, 92, 23, 25, 45, 21, 56, 1, 100, 10];
a_Numbers[0] = 2;
console.log(a_Numbers); 