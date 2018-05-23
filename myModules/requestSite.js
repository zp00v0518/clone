const  needle = require('needle');
const cheerio = require("cheerio");
const fs = require("fs");

function requestSite(URL, callback){
needle.get(URL, (err, res)=>{
	if (err) throw err;
	let $ = cheerio.load(res.body);
	$("base").remove();
	$("head").prepend(`<base href="${URL}">`)
	fs.writeFileSync("result/index.html", $("head").parent());
	return callback()

	});
}

module.exports = requestSite;