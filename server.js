var express = require("express");
var app = express();
const path = require('path'); 
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, '/anonymousNotes/dist')));

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(4000, function() {
 console.log("listening on port 4000");
});