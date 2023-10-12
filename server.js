const express = require('express');
const aplicacion = express();

aplicacion.use(express.static('publico')); 

const PUERTO = 3333;

aplicacion.listen(PUERTO, () => {
    console.log(`Servidor  en el puerto ${PUERTO}`);
});
