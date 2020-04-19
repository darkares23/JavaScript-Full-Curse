const bto1 = document.getElementById('boton1');
const bto2 = document.getElementById('boton2');

bto1.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleado.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const person = JSON.parse(this.responseText);
            const htmlTemplate = `
			<ul>
				<li>Id: ${person.id}</li>
				<li>Name: ${person.nombre}</li>
				<li>Company: ${person.empresa}</li>
				<li>Charge: ${person.trabajo}</li>
			</ul>
			`;
            document.getElementById('empleado').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});
bto2.addEventListener('click', function() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'empleados.json', true);
    xhr.onload = function() {
        if (this.status === 200) {
            const personal = JSON.parse(this.responseText);
            let htmlTemplate = '';
            personal.forEach(function(persona) {
                htmlTemplate += `
				<ul>
					<li>Id: ${persona.id}</li>
					<li>Name: ${persona.nombre}</li>
					<li>Company: ${persona.empresa}</li>
					<li>Charge: ${persona.trabajo}</li>
				</ul>
				`;
            });
            document.getElementById('empleados').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});