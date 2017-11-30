/**
 * 
 */


// imp-note : All objects that emit events are instances of the EventEmitter class.

/*
 * Door ==> EventEmitter - open() - close()
 * 
 * DoorListener shud ON or OFF
 * 
 * e.g Light AC
 * 
 */

// ------------------------------------------------------------------
let EventEmitter = require('events').EventEmitter;
class Door extends EventEmitter{
	open(){
		console.log("door opened..");
		this.emit('open',{num:3,floor:2});
	}
	close(){
		console.log("door closed..");
		this.emit('close',{num:3,floor:2});
	}
}


let door=new Door(); // event emitter

// --------------------------------------------------------------

let light={
		setUp(){
			door.on('open', function(e) {
				console.log('Lights ON in - '+e.num+" - "+e.floor);
			})
			door.on('close', function(e) {
				console.log('Lights OFF in - '+e.num+" - "+e.floor);
			})
		}
};
light.setUp();


// --------------------------------------------------------------



//--------------------------------------------------------------

let AC={
		setUp(){
			door.on('open', function(e) {
				console.log('AC ON in - '+e.num+" - "+e.floor);
			})
			door.on('close', function(e) {
				console.log('AC OFF in - '+e.num+" - "+e.floor);
			})
		}
};
AC.setUp();


//--------------------------------------------------------------

setTimeout(function() {
	door.open();	
	setTimeout(function() {
		door.close();
	}, 2000);
}, 2000);

//----------------------------------------------------------------




