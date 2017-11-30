/**
 * 
 */

module.exports = function(envi) {
	return function(req, res, next) {
		var start = +new Date();
		var url = req.url;
		var method = req.method;
		var outStream = process.stdout;
		res.on('finish', function() {
			var duration = +new Date() - start;
			var message = `${method} to ${url} took duration ${duration} \n\n`;
			outStream.write(message);
		});
		next();
	}
};
