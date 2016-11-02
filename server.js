var express = require("express");
var app = express();

app.set("view engine", "ejs");

var PORT = process.env.PORT || 3333;

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/addcontact", function(req,res){
  res.send("YOU HAVE REACHED POST ROUTE");
});

app.get("/contacts", function(req,res) {
  var contacts = ["Tony", "Tim", "Ashley", "Nick"];
  res.render("contacts", {contacts: contacts});
});

app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})