"use strict";
var People = /** @class */ (function () {
    function People(name) {
        this.name = name;
        console.log(this.name + " Constructor");
    }
    People.staticMethod = function () {
        console.log('Static Method');
    };
    People.prototype.helloPerson = function () {
        console.log("hello " + this.name);
    };
    return People;
}());
var p = new People("Agus");
People.staticMethod();
p.helloPerson();
