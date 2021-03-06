var fs = require("fs"),
	path = require("path"),
	mimeType = require("./tube.js").mimetype,
	fileReader = require("./tube.js").fileReader,
	sendResponse = require("./tube.js").sendResponse;


function getMethod(req,res, urlParse,startPath) {
	console.log("********** GetMethod Work ************");
	var query = urlParse.query,
		pathname = (urlParse.pathname == "/") ? "index.html": urlParse.pathname;
	if (pathname == "/favicon.ico"){
			return;
		}
	var pathParse= path.parse(pathname);

	let pathJoin = path.join(startPath, pathname);
	console.log(pathJoin);
	fileReader(pathJoin, (data)=>{
		sendResponse(res, data,  mimeType[pathParse.ext]);
	})
	    
	
};



module.exports = getMethod;