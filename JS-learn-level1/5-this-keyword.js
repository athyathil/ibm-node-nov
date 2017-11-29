/**
 * 
 */

/*
 * 
 * this ==> current execution-context's owner
 * 
 */

// why we need 'this' keyword?


// Ques
//
//let pName="GLOABL";
//
//let person={
//		pName:'Nag',  // obj's property
//		sayName:function(){
//			//let pName="LOCAL";
//			//console.log('im '+name); // context's hierarchy data
//			//console.log('im '+pName); // context's hierarchy data
//			//console.log('im '+person.pName); // obj's data
//			console.log('im '+this.pName); // current context's owner data
//		}
//};
//
//
////person.sayName();
//
//let oldPerson=person;
//person={pName:'IBM'};
//
//oldPerson.sayName();


//-------------------------------------------------------------


// function-binding

/*
 *   1. static
 *   2. dynamic
 * 
 */

//-------------------------------------------------------------
  

// a. static function-binding
//---------------------------


//let p1={name:'Nag',sayName:function(){console.log('im '+this.name)}};
//let p2={name:'Ria',sayName:function(){console.log('im '+this.name)}};

//------------------------------------

function sayNameForAll(){
	console.dir(this);
	console.log('im '+this.name);
}

let p1={name:'Nag',sayName:sayNameForAll};
let p2={name:'Ria',sayName:sayNameForAll};

//
//p1.sayName(); // im Nag
//p2.sayName(); // im Ria   , method-invocation   ( this ==> invoker-obj )  
//sayNameForAll(); // im __ , function-invocation ( this ==> global-obj )

//---------------------------------------------------------------

//
//
//let person={
//		name:'Nag'
//};
//
////console.log(v);
//console.log(person.age);


//--------------------------------------------------------------




//b. dynamic function-binding
//---------------------------

// from third-party
let greetLib={
		sayName:function(message,from){
			console.log(message +' im '+this.name +" : "+from);
		}
};

// our code
let p={name:'Nag'};
let e={name:'IBM'};

//
//// way-1 : call()
//greetLib.sayName.call(p,"hello","chennai");  // bind + invoke happen at once
//greetLib.sayName.call(e,'dude',"universe");
//

//way-2 : apply()
//greetLib.sayName.apply(p,["hello","chennai"]);
//greetLib.sayName.apply(e,['dude',"universe"]);

// way-3 : bind()
//
//let personSayName=greetLib.sayName.bind(p,"hello","chennai");  // bind-now but invoke later
//personSayName();
//personSayName();
//
//
//let empSayName=greetLib.sayName.bind(e); 
//empSayName('hi',"BLR");
//empSayName('dude',"CHN");


















