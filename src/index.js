/* llamadas a puro servidor */


const express = require('express');
const app = express();
const morgan = require('morgan');//sacar las respuestas del servidor y que se nos ponga en consola
const { route } = require('./routes/rutas');
//Cada vez que nosotros tengamos una dependencia y la vayamos a querer utilizar,
//vamos a crear constantes dentro de nuestro index
//AQUÍ SOLO ESTAMOS CONFIGURANDO NUESTRO SERVIDOR

const cors = require ('cors');


//MORGAN --> supongamos que queremos estar parceando todos estos errores que nos está saliendo, para eso nos servira morgan
//a morgan le podemos dar un paramtro

//CONFIGURACIONES

//dentro de estas configuraciones podríamos configurar el puerto como si nosotros estuvieramos creando una variable pero variable como de entorno
//Recordatorio: el 'app' es como si fuera todo nuestro entorno, toda nuestra aplicacion. Entonces yo puedo crear una variable
//dentro de app
//app como variable global
app.set('port', 3000);
app.set('json spaces',2);

// uno de los MIDDLEWARES. Morgan no es el unico que podamos a utilizar
app.use(morgan('dev'));
app.use(express.json()); //modulo express: tiene un modulo que nos puede servir para parsear toda la info que venga desde los jsons 
app.use(cors());

//RUTAS---------------------**********
app.use('/api/productos', require('./routes/rutas'));

//Ahora ya podemos decir esto: empezando servidor
app.listen(app.get('port'));
console.log("Mi Primer Servidor");
//PERO yo quiero leer mi aplicacion desde un puerto
//para poder accesar a mi servidor desde un explorador, entonces diremos app.listen(3000); '3000' por qué?