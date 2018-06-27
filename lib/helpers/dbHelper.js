var mongoose = require('mongoose');

var dbHelper = function() {
}

dbHelper.prototype.connect = function() {
	this.mongoDb = mongoose.connect(process.env.MONGOURL);
	this.connection = mongoose.connection;
	this.connection.on('connected', () => console.log('connected successfully with database'));
}

module.exports = new dbHelper();