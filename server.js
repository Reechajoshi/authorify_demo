var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var dotEnv = require('dotenv');
var dbHelper = require('./lib/helpers/dbHelper');
require('./routes/routes.js')(app);

function init() {
	loadModules();
	initDb();
	startApp();
}

function loadModules() {
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: true}));
	app.use(express.static('assets/output'))

	if (process.env.ALLOWCORS === true) {
		app.use(function (req, res, next) {
		    res.setHeader('Access-Control-Allow-Origin', '*');
		    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
		    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
		    res.setHeader('Access-Control-Allow-Credentials', true);
		    next();
		});	
	}

	dotEnv.config();
}

function initDb() {
	dbHelper.connect();
}

function startApp() {
	app.listen(process.env.PORT, function(){
		console.log("server listenting to port: ", process.env.PORT);
	});	
}

init();