"use strict";
var percentBonus = function () { return 0.1; };
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = 10 * percentBonus(); }
    console.log(value + bonus);
    console.log("argument: ", arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
