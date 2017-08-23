// Vertrek straks van deze oefening voor je eerste express experiment
// Maak gebruik van de informatie op de express website: https://expressjs.com/
// Bekijk ook de informatie op de ejs-website: http://ejs.co/
// En bekijk heel goed alle voorbeelden die getoond zijn in de les
// Opdracht voor nu: vertrouwd raken met de routing (de basics; we gaan hier dieper op in volgende week), en de views (templates)

// zoals steeds "requiren" wat je wil gebruiken
var cool = require('cool-ascii-faces');
var express = require("express");
// var path = require("path");

// Daarna een Express app maken
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

// Express vertellen dat je views zich in een folder views bevinden
// app.set("views", path.resolve(__dirname, "views"));

// Express vertellen dat je de EJS templating gaat gebruiken
// We moeten ejs ook installeren. Je doet dit via npm install ejs --save
// app.set("view engine", "ejs");



// weergeven van een bestand index wanneer je de homepage van je site bezoekt
app.get("nieuws", function(req, res) {
  res.render("index", {
    pagename: "nieuws"
  });
});

app.get("binnenland", function(req, res) {
  res.render("binneland", {
    pagename: "binnenland"
  });
});

app.get("buitenland", function(req, res) {
  res.render("buitenland", {
    pagename: "buitenland"
  });
});

app.get("sport", function(req, res) {
  res.render("sport", {
    pagename: "sport"
  });
});

app.get("verkeer", function(req, res) {
  res.render("verkeer", {
    pagename: "verkeer"
  });
});

// https://expressjs.com/en/starter/static-files.html
// Om statische bestanden zoals afbeeldingen, css&js-bestanden te kunnen weergeven gebruiken we de ingebouwde middleware functie express.static

// app.use(express.static('public'))

// de server starten op poort 3000

// app.listen(3000);
