var http = require ("http");
var url = require("url");
var getMethod = require("./myModules/tube").getMethod;
var postMethod = require("./myModules/tube").postMethod;
var port = 3100;

var server = http.createServer();

server.listen(port, function(){
	console.log("Сервер запущен по адресу localhost:"+port);
	console.log("*****************************************************************");
})
server.on("request", function(req, res){
	var urlParse = url.parse(req.url);
	if (req.method == "GET") {
		getMethod(req,res, urlParse,__dirname);
	} else if (req.method == "POST") {
		console.log(urlParse)
		postMethod(req,res, urlParse);
	}
});