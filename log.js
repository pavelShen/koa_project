var log4js = require('log4js');

	log4js.configure({
	  appenders: [
	    { type: 'console' },
	    { type: 'file', filename: 'log/app.log', category: 'siteName' }
	  ]
	});

var logger = log4js.getLogger("siteName");

module.exports = logger;