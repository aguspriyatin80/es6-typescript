"use strict";
// LET BERSIFAT BLOCK SCOPE
// function greetPerson(name){
//     if(name === "Agus") {
//         let greet = "Hai Agus";
//     } else {
//         let greet = "Hai man";
//     }
//     console.log(greet); // Ini akan error karena let bersifat block scope dan tidak akan dikenali dari luar scope
// }
// greetPerson("Agus");
// CONTOH LAIN
var a = 1;
var b = 2;
if (a == 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a); // 10
    console.log(b_1); // 20
}
console.log(a); // 10
console.log(b); // 2
var c = 1;
var c = 2;
var d = 3;
var d = 4;
