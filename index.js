const express = require('express'); //instanciamos express luego de instalarlo
const app = express();

app.get('/', (requeste, response) =>{

    response.end('Hola Fer'); 

})

app.listen(3000, function(){
    console.log('servidor funcionando')
});
