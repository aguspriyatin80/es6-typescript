"use strict";
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
// arrow function without parameter
var getArrValue = function () {
    return 10;
};
console.log(getArrValue());
// arrow function with only one parameter
var getArrValueParameter = function (m) { return 10 * m; };
console.log(getArrValueParameter(5));
// arrow function with more than one parameter
var getArrValueParameter2 = function (m, bonus) { return 10 * m + bonus; };
console.log(getArrValueParameter2(5, 50));
console.log(typeof getArrValue);
