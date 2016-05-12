/* Burger
 *  -Steve G, Rutgers Coding Bootcamp
 * ================================== */

// express
var express = require('express');
var app = express();

// handlebars
var handlebars = require('express-handlebars');

// body parser
var bodyParser = require('body-parser');

// method override
var methodOverride = require('method-override');

// set up static content
var staticContentFolder = __dirname + '/views';
console.log(staticContentFolder);
app.use(express.static(staticContentFolder));

// body parser set up
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// override with POST having ?_method=DELETE
app.use(methodOverride('_method'))

// include handlebars
app.engine('handlebars', handlebars({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

// Controller
require("./controllers/burgers_controller.js")(app)

// start server
var PORT = process.env.PORT || 3000;
app.listen(PORT);
