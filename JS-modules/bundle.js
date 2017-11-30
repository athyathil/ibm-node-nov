(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */
//
//var o = {
//	doWork : function() {
//		console.log('im mod2');
//	}
//}
//----------------------------------------
/**
 * http://usejsdoc.org/
// */
//
//var app = app || {};
//
//(function() {
//
//	var o = {
//		doWork : function() {
//			console.log('im mod2');
//		}
//	};
//
//	app.mod2 = o;
//
//})();

//----------------------------------------

function greet(){
	console.log('Hello...');
}

module.exports=greet;



},{}],2:[function(require,module,exports){
/**
 * http://usejsdoc.org/
 */
//
//var o = {
//	doWork : function() {
//		console.log('im mod3');
//	}
//}
//----------------------------------------
/**
 * http://usejsdoc.org/
 */
//var app = app || {};
//
//(function() {
//
//	var i = 1100;
//
//	var o = {
//		doWork : function() {
//			console.log('im mod3');
//		}
//	};
//
//	app.mod3 = o;
//
//})();

//----------------------------------------


function greet(){
	console.log('Ola...');
}

module.exports=greet;


},{}],3:[function(require,module,exports){
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

},{"./en":1,"./es":2}],4:[function(require,module,exports){
/**
 *  //
 */
//
// var app = app || {};
//
// console.log('-main.js-');
// console.log('---------------------');
//
// app.mod1.doWork(); // mod1.js
// app.mod2.doWork(); // mod3.js
// app.mod3.doWork(); // mod1.js

//--------------------------------------

let greet=require('./greet');
greet.greet('es');
greet.sayName();

},{"./greet":3}]},{},[4]);
