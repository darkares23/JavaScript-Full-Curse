const loadPost = document.getElementById('cargar');
loadPost.addEventListener('click', loadAPI);

function loadAPI() {
    // create object
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts', true);
    xhr.onload = function() {
        if (this.status === 200) {

            const response = (JSON.parse(this.responseText));
            let content = '';
            response.forEach(function(post) {
                content += `
					<h3>${post.title}</h3>
					<p>${post.body}</p>
				`;
            });
            document.getElementById('listado').innerHTML = content;
        }

    }
    xhr.send()
}