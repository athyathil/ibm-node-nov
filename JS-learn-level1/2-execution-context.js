/**
 * 
 */


/*

	execution-context / scope
	--------------------------
	
	memory/stack-frame with given args & locals variables
	to execute given instructions
	
	context has 2 phases
	--------------------
	
	a. creation-phase
	
		all variables declared with 'var' keyword,
		will get hoisted to top of context with default value ( undefined )
	
	b. execution-phase
	
		instruction will get execute in sequence
		

    ----------------------------------------------
    
    	imp-note:
    		
    	by default every js-runtime, 
    	creates one global-context & global-obj by default.	
    	
    	global-obj  ( .js activation object )
    	----------------------
    	
    	 browser-envi ==> window
    	 Node.js      ==> process
    	 ..
    	 
    	 global-context always executed by 'global-obj'
    	 
    	 ------------------------------------------------
	
	imp-note :
	
	every function-invocation also creates new execution-context
	which is child of in-which that function declared.
	

*/

//
//var v=13;
//
//function f1(){
//	console.log(v);
//	var v=14;
//}
//f1();  // f1-context  <--- global-context
//


//------------------------------------------------


//// Quiz
//
//var v=12;
//
//function f1(){
//	function f2(){
//		console.log(v);
//	}
//	f2();  // f2-context  <---- f1-context
//	var v=13;
//	console.log(v);
//}
//
//f1();  // f1-context  <--- global-context


//---------------------------------------------------------------

//var v=100;
//
//{
//	var v=200;
//}
//
//console.log(v);
// 
//---------------------------------------------------------------
//
//var v=12;
//var v=13;

//---------------------------------------------------------------

// limitations of 'var' keyword in .js-lang 

/*
 * 
 * 
 *  ==> variables always get hoisted...
 *  ==> No 'block-scope' to 'var' variables
 *  ==> we can re-declare same variable multiple times within context
 * 
 * 
 *  soln:
 *  
 *  using 'let' & 'const' keywords  ( from ES6 )
 * 
 */


// adv-1
//
//console.log(v);
//let v=100;



// adv-2
//
//var v=100;
//{
//	let v=200;
//}
//console.log(v);


// adv-3:
//
//let v=12;
//let v=13;

//-----------------------------------------------

//
//const person={
//		name:'Nag'
//};
//
////person=null;
//person.name="IBM";

//------------------------------------------------



var v=13;  // this data belongs global-context & global object
let x=13;  // this data belongs global-context

//---------------------------------------------------









