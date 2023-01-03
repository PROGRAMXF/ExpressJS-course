
const express = require('express'); //instanciamos express luego de instalarlo
const morgan = require('morgan');
const app = express();


//settings - me permiten agregar variables
app.set('appName', 'Mi primer server');
app.set('views', __dirname + '/views'); //carpeta donde colocamos las vistas

app.set('view engine', 'ejs'); //ejs motor de plantillas y me sirve para reutilizar codigo


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
app.get('/', (request, response) =>{

    response.render('index.ejs'); 

});

//vamos a agregar la ruta para el login:

app.get('/login', (request, response) => {

    response.render('login');

});

app.get('*', (request, response)=>{

    response.end('archivo no encontrado');

})

app.listen(3000, function(){
    console.log('servidor funcionando');
    console.log('Nombre de la app: ', app.get('appName'));
});
