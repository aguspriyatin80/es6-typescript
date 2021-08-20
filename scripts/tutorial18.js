"use strict";
var employee = {
    fname: "Agus",
    lname: "Priyatin"
};
// let { fname, lname, age } = employee;
var f = employee.fname, l = employee.lname, _a = employee.gender, g = _a === void 0 ? "female" : _a; // using alias and default
// console.log(fname);
console.log(f);
console.log(l);
console.log(g);
