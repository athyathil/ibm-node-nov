'use strict';

var _module = require('./pack1/module1');

var _module2 = _interopRequireDefault(_module);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let main = new _module2.default(); /**
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


main.sayName();