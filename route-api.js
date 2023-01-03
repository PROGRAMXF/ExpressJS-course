const { response } = require('express');
const express = require('express');
const router = express.Router('');

router.get('/', (require, response)=>{
    response.json({
        miprimerApi: 'Works!!'
    });
});

//ahora lo exportamos:

module.exports = router;