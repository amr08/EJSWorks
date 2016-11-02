var express = require("express");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({entended: true}));

app.set("view engine", "ejs");

var PORT = process.env.PORT || 3333;

var contacts = ["Tony", "Tim", "Ashley", "Nick"];

app.get("/", function(req, res) {
  res.render("home");
});

app.post("/addcontact", function(req,res){
  var newContact = req.body.newcontact;
  contacts.push(newContact);
  console.log(newContact);
  res.redirect("/contacts");
});

app.get("/contacts", function(req,res) {

  res.render("contacts", {contacts: contacts});
});

app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})