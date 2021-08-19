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
/* SUMMARY PERBEDAAN REST PARAMETER DAN SPREAD OPERATOR
1. PENULISAN :
   - jika parameter lebih dari 1, maka REST PARAMETER ditempatkan di belakang,
     contoh: (text, angka, ...fruit)
   - SPREAD OPERATOR tidak harus diletakkan di belakang tetapi sesuai kebutuhan
     contoh: (text, ...fruit, newElement)

3. KEGUNAAN :
   - cukup dengan satu parameter menggunakan REST PARAMETER, dapat memanggil seluruh argumen yang diberikan
     contoh:
     # jika tidak menggunakan REST PARAMETER
       const listFruit = ((fruit) => console.log(fruit)); // fungsi memiliki satu parameter yaitu fruit
       listFruit('apple','guava'); // argumen kedua yaitu 'guava' tidak akan dipanggil karena yang hanya mengenali satu argumen
     # jika menggunakan REST PARAMETER
       const listFruit2 = ((...fruit) => console.log(fruit)); // fungsi memiliki satu parameter tetapi menggunakan REST PARAMETER (...) di depannya
       listFruit2('apple','guava'); // argumen kedua dan seterusnya akan dipanggil karena semua argumen dapat dikenali

   - SPREAD OPERATOR digunakan untuk menggabungkan 2 atau lebih array
     contoh:
      const a = [1,2,3];
      const b = [4,5];
      const c = [...a, ...b, 6];
      console.log(c);
3. PERBEDAAN PALING MENDASAR :
   - REST PARAMETER menggabungkan semua parameter misalnya ('apple','guava') menjadi bentuk array seperti ['apple','guava']
   - SPREAD OPERATOR mengurai bentuk array ['red','green'] menjadi elemen terpisah seperti ('red','green') atau kebalikan dari REST PARAMETER
*/ 
