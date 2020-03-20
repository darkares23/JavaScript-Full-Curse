//Add to Local Storage
localStorage.setItem('name', 'Juan');

//Session Storage
sessionStorage.setItem('name', 'Juan');

//Delete from local storage
//localStorage.removeItem('name');

//delete all local storage
//localStorage.clear();

const name = localStorage.getItem('name');
console.log(name);
