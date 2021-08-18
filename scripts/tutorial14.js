"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var displayColors = (function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
});
var message = "List of colors";
var colorArray = ["Orange", "Yellow", "Grey"];
// displayColors(message, "Red"); // REST PARAMETER
// displayColors(message, "Red", "Blue"); // REST PARAMETER 
// displayColors(message, "Red", "Blue", "Green"); // REST PARAMETER
displayColors.apply(void 0, __spreadArray([message], colorArray)); // SPREAD OPERATOR
// CONTOH REST PARAMETER
// const sum = (...args) => console.log(args.reduce((prev,current) => prev+current));
// sum(1,2,3,4);
// CONTOH REST PARAMETER (2)
// jika tidak menggunakan REST PARAMETER, kita menulis fungsi berikut:
// const sum = ((x, y) => {
//     return x + y;
// });
// console.log(sum(1, 2, 3));
// maka parameter yang ke-3 tidak ikut dijumlahkan, karena jumlah parameter di fungsinya cuma 2 yaitu x dan y
// jika menggunakan REST PARAMETER, seharusnya seperti ini:
// const sum = (...args) => {
//     let result = 0;
//     args.filter(el => result + el);
//     return result;
// }
// console.log(sum(1, 2, 3)); // berapapun jumlah argumen yang dimasukkan akan dijumlahkan
// CONTOH SPREAD OPERATOR
// const data = [1,2,3,4];
// const sum = (...args) => console.log(args.reduce((prev,current) => prev+current));
// sum(...data, 5); // 1,2,3,4,5
// CONTOH SPREAD OPERATOR (2)
// jika belum menggunakan SPREAD OPERATOR seperti ini:
// const numbers = [1, 2, 3];
// const newNumbers = [4, 5];
// console.log(newNumbers);
// return [[1,2,3],4,5]
// jika menggunakan SPREAD OPERATOR menjadi seperti ini:
// const numbers = [1, 2, 3];
// const newNumbers = [...numbers, 4, 5];
// console.log(newNumbers);
// return [1,2,3,4,5]
// Kesimpulan
// Rest Parameter : menggabungkan semua paramater pada function ke dalam array -> dari bentuk elemen tunggal seperti ini 1,2,3 menjadi seperti ini : [1,2,3]
// Spread Operator: membagi elemen berbentuk array menjadi elemen tunggal -> dari bentuk array seperti ini [1,2,3] menjadi elemen terpisah seperti ini 1,2,3
