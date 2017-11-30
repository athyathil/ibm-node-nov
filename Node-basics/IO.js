/**
 * 
 */

//

let callback = function(err, data) {
	console.log("-----------------------------");
	if (err)
		console.log(err.message);
	console.log(data.toString('utf8'));
	console.log("-----------------------------");
};

let fs = require('fs');

console.log('reading veg-menu');
fs.readFile('./veg-menu.txt', callback);
console.log('reading nonveg-menu');
fs.readFile('./non-veg-menu.txt', callback);

console.log('do something else');
