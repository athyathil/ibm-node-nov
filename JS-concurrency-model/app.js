/**
 * 
 */

//-1
//function foo(b) {
//	var a = 10;
//	return a + b + 11;
//}
//
//function bar(x) {
//	var y = 3;
//	return foo(x * y);
//}
//
//console.log(bar(7)); // returns 42




//-2

//function foo(){}
//function bar(){foo()}
//function baz(){bar()}
//baz();



//-3

//
//function foo(){throw new Error('oops')}
//function bar(){foo()}
//function baz(){bar()}
//baz();
//


//-4
//
//function longRunning(){
//	var i=0;
//	while(i<5){
//		console.log('long...');
//		i++;
//	}
//}
//
//function shortRunning(){
//	console.log('short...');
//}
//
//longRunning();
//shortRunning();


//imp-note : at any-time , in js-runtime, only one function can execute.


//----------------------------------------------------

// 99% js-function will execute on 'event'

//------------------------------------------------------

// when .js-lang is best lang? ( browser-side or server-side )

/*
 *  on event , to do any action(s) asynch
 * 
 */

//------------------------------------------------------


// -5


/*
 * 
 *   <button class="veg"> veg </button>
 *   <button class="non-veg"> non-veg </button>
 * 
 * 
 */

// using jquery
//
//console.log('start..');
//
//$.on('.veg','click',function vegHandler(event){
//	console.log('handling event on .veg elements');
//});
//
//$.on('.non-veg','click',function nonVegHandler(event){
//	console.log('handling event on .nonveg elements');
//});
//
//console.log('continue with other work...');
//
//function longRunning(){
//	var i=0;
//	while(i<5){
//		console.log('long...');
//		i++;
//	}
//}
//longRunning();




// -6

console.log('start...');

// initiate IO  ( in browser, IO means , dealing with browser APIs )
// e.g
setTimeout(function(event){
	console.log('do anyaction with timeoout');
},1000);

console.log('continue with other work...');

function longRunning(){
	var i=0;
	while(i<5){
		console.log('long...');
		i++;
	}
}
longRunning();


//---------------------------------------------------------





