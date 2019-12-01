var server = require("./server");
var router= require("./router");
var reqHandlers = require("./requestHandlers");

var handle = {};
handle["/"] = reqHandlers.iniciar;
handle["/iniciar"] = reqHandlers.iniciar;
handle["/subir"] = reqHandlers.subir;


server.iniciar(router.route, handle);

