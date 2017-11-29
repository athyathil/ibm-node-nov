/**
 * 
 */

/*
 * 
 * data-types
 * 
 * 1. simple/primitive ==> values 2. complex/references ==> objects
 * 
 * //------------------------------------
 * 
 * 
 * 1. simple/primitive ==> values
 * 
 * 
 * a. string b. number c. boolean d. undefined e. symbol ( from es6 )
 * 
 * 2. complex/references ==> objects
 * 
 * ......
 * 
 * 
 */

//
// let name="nag";
// let selection='a';
//
// let count=12;
// let cost=12.12;
//
// let found=true;
//
// let v;
//
// //-------------------------------
//
//
// const val=100;
// -------------------------------------------

// How to create objects in .js-lang ?
/*
 * syntax 
 * 
 * let ref=new Constructor();
 * 
 * 
 */

// imp-note : till ES5, js-lang don't have 'class' syntax
/*
 * if any function, with 'pascal-case' naming conventions, ==> constructor/class
 * 
 */

//let config = new Object(); 

/*
 * imp-note:
 * 
 * by default, all objects are extensible & configurable
 * 
 */

//config.url="htp://";
//config.method="POST";
//config.success=function(){
//	//..
//};
//
//delete config.method;

//---------------------------------------------------

/*
 *  literal-style objects  ==> object that we can create with 'new' & 'constructor'
 * 
 */

// 1. Object

//let config = new Object(); 
//
//config.url="htp://";
//config.method="POST";
//config.success=function(){
//	//..
//};

// or
//
//let config={
//		url:'http://',
//		method:'POST',
//		success:function(){
//			//
//		}
//};
	

//-----------------------------------------


// 2. Array

let arr=new Array();

// or

let newArr=[];

//-----------------------------------------


// 3. Regular Expreesion

//let re=new RegExp("\\d{3}-\\d{2}-\\d{4}");  // ssn==> 233-33-2444


// or

//let newRe=/\d{3}-\d{2}-\d{4}/;


//-----------------------------------------


// 4. Function 

/*
 * 
 * every function by default is an object
 * 
 */

//let add=new Function("n1","n2","let r=n1+n2;return r;");

// or
//
//function add(n1,n2){
//	let r=n1+n2;return r;
//}


//-----------------------------------------------

let person={
		name:'Nag',
		"full-name":"Nagabhushanam N"
}

person.name="N Nag";
console.log(person.name);

person["full-name"]="Full-Name";
console.log(person["full-name"]);






