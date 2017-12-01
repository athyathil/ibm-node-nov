/**
 * 
 */

let express = require("express");
let logger=require('./logger');
var morgan = require('morgan')
let fs=require('fs');
let app = express();

// ---------------------------------------------------------------------------------
//
// app.get("/", function(req, res) {
// res.send("Hello from Express F.W");
// // res.write("hello again");
// // res.end();
// });
//
// app.get("/todos", function(req, res) {
// // load from DB
// let todos = [ 'learn JS', 'Lern Node.js basics', "Learn Express" ];
// // res.send(todos);
// res.json(todos);
// });
//
// app.get("/old-path", function(req, res) {
// res.redirect(301, "/new-path");
// });
//
// app.get("/new-path", function(req, res) {
// res.send("welcome to new-world");
// });

// ---------------------------------------------------------------------------------



//
// app.get("/", function(req, res) {
// res.sendFile(__dirname+"/public/index.html"); // with streams will
// non-blocking IO
// });
//
// app.get("/css/bootstrap.css", function(req, res) {
// res.sendFile(__dirname+"/public/css/bootstrap.css"); // with streams will
// non-blocking IO
// });


// app.use(logger('dev'));
app.use(morgan());
app.use(express.static('public'));  // built-in
app.get("/todos", function(req, res) {
	let todos = [ 'learn JS', 'Lern Node.js basics', "Learn Express" ];
	if(req.query.limit>=0){
		res.json(todos.slice(0,req.query.limit));	
	}else{
		res.json(todos);	
	}
	
});
app.get("/customers/:customer/accounts/:num", function(req, res) {
	if(req.params.num != 1234){
		res.status(404).json('No account Exists');
	}else{
		res.send(req.params.customer +" & "+req.params.num);	
	}
	
});






app.listen(3000, function() {
	console.log("server at http://localhost:3000/");
});