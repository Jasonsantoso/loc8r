var mongoose = require('mongoose');

// SET NODE_ENV=development
var dbURI = 'mongodb://localhost/loc8r';

// SET NODE_ENV=production
if (process.env.NODE_ENV === 'production') {
	dbURI = 'mongodb://jason:santoso@ds145312.mlab.com:45312/loc8r';
	// 'mongodb://localhost/loc8r'
	// 'mongodb://jason:santoso@ds145312.mlab.com:45312/loc8r'
	// process.env.MONGOLAB_URI
}

mongoose.connect(dbURI);

/* --- Monitoring when app stops using SIGINT --- */
var readLine = require("readline");
if (process.platform === "win32") {
	var rl = readLine.createInterface ({
		input: process.stdin,
		output: process.stdout
	});
	rl.on("SIGINT", function() {
		process.emit("SIGINT");
	});
}

/* --- Monitoring connection --- */
mongoose.connection.on('connected', function() {
	console.log('Mongoose connected to ' + dbURI);
	console.log('NODE_ENV = ' + process.env.NODE_ENV);
});
mongoose.connection.on('error', function() {
	console.log('Mongoose connection error');
});
mongoose.connection.on('disconnected', function() {
	console.log('Mongoose disconnected');
});

/* --- Graceful Shutdown --- */
var gracefulShutdown = function (msg, callback) {
	mongoose.connection.close(function() {
		console.log('Mongoose disconnected through ' + msg);
		callback();
	});
};

// For nodemon restart
process.once('SIGUSR2', function() {
	gracefulShutdown('nodemon restart', function() {
		process.kill(process.pid, 'SIGUSR2');
	});
});
// For app termination
process.on('SIGINT', function() {
	gracefulShutdown('app termination', function() {
		process.exit(0);
	});
});
// For Heroku app termination
process.on('SIGTERM', function() {
	gracefulShutdown('Heroku app shutdown', function() {
		process.exit(0);
	});
});


/* --- Mongoose Schema --- */
require('./locations');
