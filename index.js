const { request, response } = require('express');
const express = require('express'); //instanciamos express luego de instalarlo
const app = express();

//rutas:
app.get('/', (requeste, response) =>{

    response.end('Hola Fer'); 

})

//vamos a agregar la ruta para el login:

app.get('/login', (request, response) => {

    response.end('aqui va el login');

});

app.get('*', (request, response)=>{

    response.end('archivo no encontrado');

})

app.listen(3000, function(){
    console.log('servidor funcionando')
});
