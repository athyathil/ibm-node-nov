/**
 * 
 */

/*
 * All objects that emit events are instances of the 'EventEmitter' class.
 * 
 */

let EventEmitter = require('events').EventEmitter;

let ee = new EventEmitter();

ee.on('hungry-event', function(e) {
	let i=0;
	while(i<100000){
		console.log('handles by serving '+e.menu);
	i++;
	}
});
ee.on('sleep-event', function() {
	console.log('handles sleep event');
});

// ----------------------------------------------

ee.emit('hungry-event',{menu:'biryani'});  // event will get queued with callback, then event-loop will execute in single-call-stack
ee.emit('hungry-event',{menu:'meals'});
ee.emit('hungry-event',{menu:'beer'});
console.log('-----------------------------');
ee.emit('sleep-event');

//-----------------------------------------------

console.log('cont..with other work..');
