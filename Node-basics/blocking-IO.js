/**
 * 
 */


/*
 *   IO
 *   
 *    --> read file from file-system
 *    --> DB calls on localhost on n/w
 *    --> web-service call on service provider
 *    ....
 * 
 * 
 */


//  
let fs=require('fs');  // 

// IO
console.log("------------------------------------------");
let menu=fs.readFileSync('./veg-menu.txt', 'utf8'); // initiate IO & wait for file-data
console.log(menu);
console.log("------------------------------------------");
// continue with any other work
console.log('do something else');
console.log("------------------------------------------");




