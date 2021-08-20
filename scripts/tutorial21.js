"use strict";
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function () { };
    return Person;
}());
var p = new Person();
console.log(p);
// console.log(p.greet === Person.prototype.greet);
// employee(); // hoisting
// function employee() { }
// console.log(typeof employee);
