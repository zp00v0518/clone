const fs = require("fs"); 

function fileReader(pathName, callback){
		// console.log("**********fileReader work*********");
		var data;
		try {
			data = fs.readFileSync(pathName, "utf-8");
		} catch (error){
			data = fs.readFileSync("error.html","utf-8")
		}
		return callback(data);
}

module.exports = fileReader;