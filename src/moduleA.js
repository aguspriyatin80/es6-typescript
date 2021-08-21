
// import {fname, lname, obj} from './moduleB.js'  // log Module B laoded

// obj.name = "Ross";
// console.log(obj.name);
// console.log(`${fname} ${lname}`);

// import firstName from './moduleB.js'
import { default as f } from './moduleB.js'
// console.log(`${firstName}`);
console.log(`${f}`);