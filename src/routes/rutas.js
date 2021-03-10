//Hay que exportar este archivo de "rutas" hasta nuestro index para poderlo utilizar

//aqui no se sabe qué es 'app' porque no hay nada inicializado, 
//en este caso la constante 'app' pero hay dos formas de inicializarlo.
//1. las llavecitas son para agarrar todos los posibles métodos o modulos que tiene express o
//que tiene cualquier cosa que nosotros vayamos a poner. Si fueramos a utilizar diferentes metidos dentro del framework express,
//podríamos ponerlo dentro de las llavecitoas
const{Router} = require('express');

//nos falta inicializar la variable router
const router = Router();

//cambiamos 'app' por 'router'
router.get('/', (req, res) => {
    res.json({"name":"John Doe"});
});

/* O, en lugar de hacer una constante podemos crear una constante express (como en el index), equivalente a el de usar las llavecitas
const express = require(express);
const router = express.Router();
 */

 //faltaria exportar este archivo, donde exportamos tode este objeto que es rutas
 module.exports = router;
