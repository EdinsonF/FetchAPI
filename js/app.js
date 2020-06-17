const btnTXT = document.querySelector("#txtBtn");
const btnJSON= document.querySelector("#jsonBtn");
const btnAPI = document.querySelector("#apiBTN");
const resultado = document.querySelector("#resultado");


btnTXT.addEventListener('click', cargarTXT);
btnJSON.addEventListener('click', cargarJSON);
btnAPI.addEventListener('click', cargarAPI);

function cargarTXT(){
    fetch('datos.txt')
    .then(function(result){
        return result.text();
    })
    .then(function(datos){
        resultado.innerHTML = datos;  
    })
    .catch(function(error){

    });
}


function cargarJSON(){
    fetch('empleados.json')
    .then(function(result){
        return result.json();
    })
    .then(function(datos){
        
        datos.forEach(function(empleados){
            let li = document.createElement('li');
            li.innerHTML = `${empleados.nombre}, ${empleados.puesto}`;
            resultado.appendChild(li);
        });
    })
    .catch(function(error){

    });
    
}

//https://picsum.photos/list


function cargarAPI(){
    fetch('https://picsum.photos/list')
    .then(function(result){
        return result.json();
    })
    .then(function(datos){
        
        datos.forEach(function(dato){
            let li = document.createElement('li');
            li.innerHTML = `<a target="_blank" href="${dato.post_url}">Ver Imagen</a>, ${dato.author}`;
            resultado.appendChild(li);
        });
    })
    .catch(function(error){

    });
    
}