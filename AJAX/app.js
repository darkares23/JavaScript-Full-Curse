document.getElementById('cargar').addEventListener('click', loadData);

function loadData() {
    const xhr = new XMLHttpRequest();
    //Open conection
    xhr.open('GET', 'data.txt', true);

    //Once the page is loaded
    xhr.onload = function() {
            // status codes: 200= coreect | 403 prohibed | 404 not found
            if (this.status === 200) {
                document.getElementById('listado').innerHTML = `
				<h1>${this.responseText}</h1>
				`;
            }
        }
        //OLD WAY
        /*xhr.onreadystatechange = function() {
			console.log(`State: ${this.readySate}`);

            if (this.readyState === 4) {
                document.getElementById('listado').innerHTML = `
				<h1>${this.responseText}</h1>
				`;
            }
        }
        // Ready State status
        0: not initiallized
        1: conection success
        2: recibido
        3: procesing
        4: Ready response
         */

    //send the request
    xhr.send();
}