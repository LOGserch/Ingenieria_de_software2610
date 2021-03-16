var Http = require( 'http' );//importacion de http en js
var server = Http.createServer(function(request,response){
    //console.log('Solicitud entrante...');
    console.log(request.url);
    console.log(request.method);
    response.write("Hola desde el node");// no se envía por que no se indica fin de la respuesta
    response.end();//end para enviar la respuesta
});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});