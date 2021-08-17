"use strict";
var PI = 3.14;
var MAX_SIZE = 1024;
var a = 10;
var b = 20;
// tidak bisa reassign dalam satu block scope
a = 20;
b = 30;
a = b - a;
