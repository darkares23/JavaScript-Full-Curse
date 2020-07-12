// destructuring last way

function reserv(complete, options) {
	options = options || {};
	let {
		paymethod,
		quanty,
		days
	} = options;
	console.log(paymethod);
	console.log(quanty);
	console.log(days);
}

reserv(false, {
	paymethod: "credit card",
	quanty: 2000,
	days: 3
});