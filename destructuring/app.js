const cities = ["med", "bog", "cal", "bug"];
console.log(cities);

client = {
	type: 'gold',
	name: 'ale',
	datas: {
		location: {
			city: 'Med',
			country: 'Col'
		},
		account: {
			since: '10/12/2020',
			founds: 4000
		}
	}
}
let {
	datas: {
		location
	}
} = client;
console.log(location);
let {
	datas: {
		account
	}
} = client;
console.log(account);
console.log(account.founds);


function sum(a, b) {
	if (typeof a == "number" || typeof b == "number") {
		return (console.log(a + b));
	} else {
		return (console.log("not int"));
	}
}
sum("2", "2");
sum(2, 2);