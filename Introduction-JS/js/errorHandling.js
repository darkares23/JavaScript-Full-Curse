//fuction dosent exist
try {
	algo();
} catch (error) {
	console.log(error);
} finally {
	console.log('dosent matter execute the code');
	
}

function client_obtain() {
	console.log('Downloading...');

	setTimeout(function() {
		console.log('Complete');
	}, 3000);
}
client_obtain();