var express = require("express");
var request = require("request");
var bodyParser = require("body-parser")

var app = express();

app.set("view engine", "ejs");

var PORT = process.env.PORT || 3000;

app.get('/', function(req, res){
	res.render("search");
});

app.get('/results', function(req, res){
	var query = req.query.search;
	var url = "http://omdbapi.com/?s=" + query;

	request(url,function(error,response,body){
		if(!error && response.statusCode == 200) {
		
			var data = JSON.parse(body)
			res.render("results", {data:data});
		}
	});
});




app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})