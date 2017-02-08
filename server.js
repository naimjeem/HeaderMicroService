var PORT = process.env.PORT || 3000;
var express  = require("express");
var morgan = require("morgan");
var API = "/api/whoami";
var app = express();

app.use(morgan('dev'));
app.get(API, function (req, res) {
	var host = req.host;
	var language  = req.headers['accept-language'];
	var userAgent = req.headers['user-agent'];
	console.log(req);
	res.json({
		host: host,
		language: language,
		userAgent: userAgent
	});
});

app.listen(PORT, function(){
	console.log('Listing on PORT ' + PORT);
});