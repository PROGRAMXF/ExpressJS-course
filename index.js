
const express = require('express'); //instanciamos express luego de instalarlo
const morgan = require('morgan');
const app = express();

//middlewares
app.use(morgan('combined'));//Morgan es un paquete de logging para Node. js. Jest es un framework de testing lanzado por primera vez en 2014

/*
app.use(function (request, response, next){
        console.log('request url:' + request.url);
        next();
    }
);

app.use((request, response, next) =>   {
        console.log('Ah pasado por esta función');
        next();
    }
);
*/
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
