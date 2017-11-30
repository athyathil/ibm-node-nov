/**
 * http://usejsdoc.org/
 */

let http = require('http');
let fs = require('fs');

let httpServer = http.createServer(); // server-EventEmitter

// on http-request, httpServer emits 'request' event
httpServer.on('request', function(req, res) {
	console.log('New req-path - ' + req.url);

	// -------------------------------------------------------

	// res.writeHead(200, {
	// "Content-Type" : 'text/plain'
	// });

	// res.write("hello from server runnining in Node.js");
	// res.end();

	// -------------------------------------------------------

	// Non Blocking IO
	// fs.readFile('./ppt/all-levels node.pdf', function(err, data) {
	// res.writeHead(200, {
	// "Content-Type" : 'application/pdf'
	// });
	// res.write(data);
	// res.end();
	// });
	//
	// console.log('after IO initiation , server-thread will back to next
	// work');

	// -----------------------------------------------------------
	//
	//	res.writeHead(200, {
	//		"Content-Type" : 'application/pdf'
	//	});
	//	let redableStream = fs.createReadStream('./ppt/all-levels node.pdf'); // EventEmitter
	//	redableStream.on('data', function(chunk) {
	//		console.log('data-event');
	//		console.log(chunk.length);
	//		res.write(chunk);
	//	});
	//	redableStream.on('end', function() {
	//		console.log('end-event');
	//		res.end();
	//	});

	// ------------------------------------------------------------

});

httpServer.listen(8080, function() {
	console.log('server at http://localhost:8080/');
});

// -----------------------------------------------------------
