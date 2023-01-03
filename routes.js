
const express = require('express');
const router = express.Router('');

//reemplazamos el app por router

router.get('/', (request, response) =>{

    response.render('index.ejs'); 
});
//vamos a agregar la ruta para el login:

router.get('/login', (request, response) => {
    response.render('login');
});

//ahora debemos exportarlo

module.exports = router;

