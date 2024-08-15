const baseEndpoint = 'https://api.github.com/user';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');
const username=document.querySelector('#UsereName').value;

function displayUser(data) {
  $n.textContent = 'cargando...';
  //const response = await fetch(`${usersEndpoint}/${username}`);
  console.log(username.value);
  $n.textContent = `${data.current_user_url}`;
  $b.textContent = `${data.topic_search_url}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

fetch (baseEndpoint)
.then (response=>response.json())
.then (data =>{
  displayUser(data);
  console.log(data);
})
.catch(error=>{
handleError(error)
})

/* post*/
(POST) //datos a una API
fetch(baseEndpoint, {
    // Indicar el tipo de método HTTP
    method: 'POST',
    // Definir los headers
    headers: {'Content-type': 'application/json; charset=UTF-8'},
    // Definir el cuerpo del Objeto que se va a enviar a la API
    body: JSON.stringify(username)
})
    .then(response => response.json())
    .then(response => {
        console.log(response);
    })
    .catch(error => console.error(error))

/*Consumir una api y traer datos del user que agregemos en user name y esta se muestra en el dom*/