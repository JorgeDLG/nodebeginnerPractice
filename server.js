var http = require("http");
 
function iniciar(){
	function onRequest(request, response) {
	console.log('petición recibida!');
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("Hola Mundo");
	response.end();
	}
	http.createServer(onRequest).listen(8888);
	console.log('servidor iniciado!');
}
exports.iniciar = iniciar;
//
