module.exports  = function(app) {
	initRoutes(app);
}

function initRoutes(app) {
	app.get('/', function(req, res){

		
		res.send("working here");
	});
}