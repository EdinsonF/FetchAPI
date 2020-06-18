const btnTXT = document.querySelector("#txtBtn");
const btnJSON= document.querySelector("#jsonBtn");
const btnAPI = document.querySelector("#apiBTN");
const resultado = document.querySelector("#resultado");

let cargarTXT;

 cargarTXT =()=>{
    fetch('datos.txt')
    .then(result => result.text())
    .then(datos=> resultado.innerHTML = datos)
    .catch(error => console.log("error"));
}

cargarJSON=()=>{
    fetch('empleados.json')
    .then(result => result.json())
    .then(datos => {
        datos.forEach(empleados => {
            let li = document.createElement('li');
            li.innerHTML = `${empleados.nombre}, ${empleados.puesto}`;
            resultado.appendChild(li);
        })
    })
    .catch(error => console.log("error"));      
}
//https://picsum.photos/list


cargarAPI=()=>{
    fetch('https://picsum.photos/list')
    .then(result => result.json())
    .then(datos =>{   
        datos.forEach(dato => {
            let li = document.createElement('li');
            li.innerHTML = `<a target="_blank" href="${dato.post_url}">Ver Imagen</a>, ${dato.author}`;
            resultado.appendChild(li);
        });
    })
    .catch(error => console.log("error"));
    
}

//las arrow function deben ser llamadas despues de ser creadas
btnTXT.addEventListener('click', cargarTXT);
btnJSON.addEventListener('click', cargarJSON);
btnAPI.addEventListener('click', cargarAPI);