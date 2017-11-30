"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * http://usejsdoc.org/
 */

let message = exports.message = "good morning";

// export let name="Nag";
// export let age=33;


// let name="Nag";
// let age=33;
// export {name,age}
//
// let tnr={
// name:'Nag',
// age:33
// };
//
// export {tnr};

// ------------------------------------------


class Main {
	sayName() {
		console.log('im Main class');
	}
}
class A {}
class B {}

exports.default = Main;
exports.A = A;
exports.B = B;