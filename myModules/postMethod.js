const fs = require("fs");
const path = require("path");
const reqOn = require ("./tube").reqOn;
const requestSite = require ("./tube").requestSite;
const sendResponse = require("./tube.js").sendResponse;

function postMethod(req,res, urlParse) {
	console.log("********** PostMethod Work ************");
	if (urlParse.pathname == "/sendUrl") {
		var data ="";
		req.on('data', function(chunk){
			data += chunk;
		})
		req.on("end", function(){
			requestSite(data, ()=>{
				const f = "Сайт успешно скопирован";
				sendResponse(res, f)
			})
			
		})
	} 
}

module.exports = postMethod;

