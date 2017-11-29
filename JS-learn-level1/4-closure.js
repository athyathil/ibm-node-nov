/**
 * 
 */

/*
 * 
 * closure 
 * --------
 * 
 * A closure is a function having access to the parent scope, 
 * even after the parent function has closed.
 * 
 * why/where we closures in .js lang?
 * 
 *  --> to abstract public-behav any module to other modules
 *  --> when .js function executing async, to access parent-coped data.
 * 
 */
//
//function teach(sub) {
//	console.log("teaching " + sub);
//	let notes = sub + "-notes";
//	let dummy="dummy info";
//	// closure
//	let learn=function(){
//		console.log('learning with '+notes);
//	}
//	//learn();
//	console.log('teach-end..');
//	return learn;
//}
//
//let learnFunc=teach('.js'); // teach-context created given arg & local
//learnFunc();
//learnFunc();
//learnFunc();
//

//---------------------------------------------------------------




// use-1: to abstract public-behav any module to other modules
/*
 *  e.g counter-module :
 *  
 */
//--------------------------

//self executable function or IIFE ( Imme...Invo..FUnc..Exp...) // module pattern

//--------------------------

const counter=(function(){
	let count=0; // private
	// public
	function doCount(){
		count++;
	}
	function getCount(){
		return count;
	}
	let o={
			inc:doCount,
			get:getCount
	};
	return o;
})();

//let counter=init();
//let counter2=init();
//----------------------------






