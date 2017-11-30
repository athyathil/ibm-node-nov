/**
 * http://usejsdoc.org/
 */

let fs = require('fs');

// IO
console.log("------------------------------------------");
fs.readFile('./veg-menu.txt', 'utf8', function(err, data) { // file API
	if (err)
		throw err;
	console.log('Today\'s special');
	console.log(data);
	console.log("------------------------------------------");
}); // initiate IO , expecting event to be triggered
console.log("------------------------------------------");
// continue with any other work
console.log('do something else');
console.log("------------------------------------------");
