

// const emisorProductos = new eventEmitter();

// emisorProductos.on('compra', (total,numProductos) => {
//     console.log(`El total de la compra es: ${total}`);
//     console.log(`Numero de productos : ${numProductos}`); 
//     });

//     emisorProductos.emit('compra' , 1000, 6);
  
// const promesCumplida= false;;
// const miPromesa = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if (promesCumplida) {
//             resolve('Promesa cumplida');
//         } else 
//             reject('Promesa rechazada');    
//         // resolve('Promesa resuelta');
//     }, 2000);
// }); 

// const manejarPromesaCumplida = (resultado) => {
//     console.log(resultado);
// };

// const manejarPromesaRechazada = (razonRechazo) => {
//     console.log(razonRechazo);
// };

// miPromesa.then(manejarPromesaCumplida, manejarPromesaRechazada);



// miPromesa.then((resultado) => {
//     console.log(resultado);
// });



// const estatusPedido=() => {
//    return Math.random()<0.5;
// };
// const miPedidoDePizza = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         if (estatusPedido()) {
//             resolve('Pedido de pizza cumplido');
//         } else { 
//             reject('Pedido de pizza rechazado');
//     }
//     }, 2000);
// });

// const manejarPedidoCumplido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };
// const rechazarPedido = (mensajeDeError) => {
//     console.log(mensajeDeError);
// }


// miPedidoDePizza.then(manejarPedidoCumplido, rechazarPedido);

// miPedidoDePizza
// .then((mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// })
// .then(null, (mensajeDeError) => {
//     console.log(mensajeDeError);
// });
// .catch((mensajeDeError) => {
//     console.log(mensajeDeError);
// }
// );



// const manejarPedido = (mensajeDeConfirmacion) => {
//     console.log(mensajeDeConfirmacion);
// };
 
// const manejarRechazo = (mensajeDeError) => {
//     console.log(mensajeDeError);
// };

// miPedidoDePizza
// .then(manejarPedido).catch(manejarRechazo);


// ejercicio de equipos en javascript
// const sorteo = equipos => {
// if ( equipos.legth%2){
//     equipos.push('descansa');
//    }
// let fixture = [];
// let rivales = equipos.length-1;
// let partidos = equipos.length/2;

// for (let i = 0; i < rivales; i++) {
//     fixture[i] = [];
//     for (let j = 0; j < partidos; j++) {
//         fixture[i].push(equipos[j],equipos[rivales-j]);
//     }
//  }
//     return fixture;
        
// }

// const participantes = [
//     'Juan',
//     'Pedro',
//     'gabriel',
//     ];

// console.log(sorteo(participantes));

// const http = require('http');

// const servidor = http.createServer((req,res) => {
 
//     res.end('Hola mamita');
// });

// const puerto = 3000;

// servidor.listen(puerto, () => {
//     console.log(`Servidor escuchando en el http://localhost:3000/: ${puerto}`);
// }); 

// puerto 3000 es el puerto por defecto de node.js     


// const http = require('http');

// const servidor = http.createServer((req,res) => {
// console.log('===> res (respuesta)');

// res.setHeader('content-type', 'application/json');
// console.log(res.getHeaders()); 


// res.end('Hola mamita linda love');

// });

// const puerto = 3000;

// servidor.listen(puerto, () => { 
//     console.log(`Servidor escuchando en el puerto ${puerto}... `);
// });

// const miURL = new URL('http://www.ejemplo.org/cursos/programacion?ordenar=vistas&nivel=1');

// console.log(miURL.hostname);


// console.log(miURL.pathname);


// console.log(miURL.searchParams);

// console.log(miURL.searchParams.get('ordenar')); 

// console.log(miURL.searchParams.get('nivel'));


// const http = require('http');
// const cursos = require('./cursos');


// const servidor = http.createServer((req,res) => {
// const {method} = req;

//   switch (method) {
//         case 'GET':
//             return manejarSolicitudGET(req,res); 
//         default:
//             console.log(`El metodo ${method} no esta soportado`);   
//   }
// });

// function manejarSolicitudGET(req,res) {
//     const path = req.url;

//     if (path==='/') {
//         res.statusCode = 200;
//         res.end('bienvenidos a mi primer servidor y API creados con Node.js');
//     } else if (path === '/cursos') {
// res.statusCode=200;
// res.end(JSON.stringify(cursos.infoCursos));
//     }
    // else if (path === '/cursos/programacion') {
    //     res.statusCode=200;
    //     res.end(JSON.stringify(cursos.infoCursos.programacion));
    // }     
// } 

// const PUERTO = 3000;
// servidor.listen(PUERTO, () => {
//     console.log(`El servidor escuchando en el puerto ${PUERTO}... `);
// });

for (let index = 0; index < 10; index++) {
    console.log(index);
}