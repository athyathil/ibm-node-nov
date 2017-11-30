/**
 * 
 */


//import {message,name,age} from './pack1/module1';
//import {message,name as tnrName,age as tnrAge} from './pack1/module1';

//console.log(message);
//console.log(tnrName);
//console.log(tnrAge);

//import * as tnrDetails from './pack1/module1'
//console.log(tnrDetails.name);
//console.log(tnrDetails.age);


//import {tnr} from './pack1/module1';
//console.log(tnr.name);
//console.log(tnr.age);
//
////tnr=null;  // bcoz, all imported members are 'const' i.e we cannon change reference
//
//tnr.name="Nag N";


import Main,{A,B} from './pack1/module1';

let main=new Main();
main.sayName();

//------------------------------------------------------------



