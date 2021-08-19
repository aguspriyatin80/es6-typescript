const PI = 3.14;
const MAX_SIZE = 1024;

let a = 10;
let b = 20;

// tidak bisa reassign dalam satu block scope
a = 20; 
b = 30;
a = b - a;