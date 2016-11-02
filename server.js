var express = require("express");
var app = express();

app.set("view engine", "ejs");

var PORT = process.env.PORT || 3333;

app.get("/", function(req, res) {
  res.render("home");
});

app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})