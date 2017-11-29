/**
 * http://usejsdoc.org/
 */


/*

	FP
	---
	
	-> function as object/value
	-> can assign function any variables
	
	High-Order-Function
	---------------------
	-> can pass function to other functions
	-> can return function from other function
	
	
	-------------------------------------------------
	
	


*/

/*
 *  we create function-object in .js-lang 2 -ways
 *  
 *  1. function declaration
 *  
 *  		==> function-obj will get create at context-creation-phase
 *      ==> it always hoist with function-obj
 *      ==> Name function
 *  
 *  2. function expression  ( runtime )
 *  
 *      ==> function-obj will get create at context-execution-phase
 *      ==> anonymous function
 * 
 */

//---------------------------------------------

//1. function declaration
//
//console.log(add(12,13));
//
//function add(n1,n2){
//	return n1+n2;
//}

//console.log(add(12,13));


//---------------------------------------------


//2. function expression

//console.log(add(12,13)); // thro error
//let add=function sum(n1,n2){return n1+n2};
//console.log(add(12,13));

//---------------------------------------------

//function f(){
//	
//}
//
//let action;
//if(true){
//	action=function(){}
//}else{
//	action=function(){}
//}

//---------------------------------------------


// FP principles


//-----------------------------------------------

// assign function variables
//
//function sayHello(){
//	console.log("hello...");
//}
//
//var greet=sayHello;
//greet();

//-----------------------------------------------

// pass function to other function ( Higher Order Function )

//function greet(f){
//	if(f){f(); return};
//	console.log('hello..');
//}
//greet();
//greet(function(){console.log('ola..')});

//e.g

//
//let arr=[1,3,5,7,9,2,4,6,8,10];
////arr.sort();
//
//let compare=function(n1,n2){return n1-n2};
//arr.sort(compare);

//-----------------------------------------------

// function can return other function

//function teach(){
//	console.log('teach.....');
//	let learn=function(){console.log('learn...');};
//	return learn;
//}
//
//let learnFunc=teach();
//learnFunc()
//learnFunc();
//

//-----------------------------------------------

// function-currying  or partial functions
//
//function makeAdder(n){
//	let f=function(a){
//		return n+a;
//	}
//	return f;
//}
//
//let plus10=makeAdder(10);
//
//let r=plus10(30);
//console.log(r);
//
//
//console.log(makeAdder(10)(30));

//-----------------------------------------------




// when FP-lang is good ?

/*
 * 
 *  on any input/event, 
 *  by executing serious computations ( by function(s) )
 *  to produce new-output
 * 
 * 
 */

//---------------------------------------------------



//// adv
//
//function reflect(a,b){
//	console.dir(arguments);
//	return arguments[0];
//}
//
//console.log(reflect(12,13,14));


// Quiz

//function getFood(){
//	return "No Food";
//}
//let getFood=...
//function getFood(pay){
//	if(!pay)return "No Food"
//	return "Biryani";
//}
////let getFood=...
//
//console.log(getFood());


//-----------------------------------------------


// ES6

// function with default params

//
//function func(a=1,b=2){
//	//if(!a)a=1;
//	//if(!b)b=2;
//	console.log(a);
//	console.log(b);
//}
//
//func(undefined,20);


//function with rest param
//
//function func(a,...rest){
//	console.log(a);
//	console.log(rest);
//}
//
//func(1,2,3,4,5);
//





