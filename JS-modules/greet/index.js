/**
 * http://usejsdoc.org/
 */
//
//var o = {
//	doWork : function() {
//		console.log('im mod1');
//	}
//}
//----------------------------------------
/**
 * http://usejsdoc.org/
 */
//
// var app = app || {};
//
// (function() {
//
// app.mod2.doWork(); // mod3.js
// app.mod3.doWork(); // mod1.js
//
// var o = {
// doWork : function() {
// console.log('im mod1');
// }
// };
//
// app.mod1 = o; // export
//
// })();
// ----------------------------------------

console.log('-greet/index.js-');

let en = require('./en');
let es = require('./es');

// let message="good-evening";
function greet(lang) {
	if (lang === 'en') {
		en();
	}
	if (lang === "es") {
		es();
	}
}
// greet();
function sayName() {
	console.log('im greet-package index-module');
}
function sayAuthor() {
	console.log('Nag');
}

module.exports = {
	greet : greet,
	sayName : sayName
};
