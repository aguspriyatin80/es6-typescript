let displayColors = ((message: string, ...colors) => {
    console.log(message);
    console.log(colors);
    for (let i in colors) {
        console.log(colors[i]);
    }
});
let message = "List of colors";
displayColors(message, "Red");
displayColors(message, "Red", "Blue");
displayColors(message, "Red", "Blue", "Green");

// let data = [1, 2, 3, 4];
// const sum1 = (data) => console.log(data.reduce((prev, current) => prev + current));
// sum1(data);

// const sum2 = (...theArgs) => {
//     return theArgs.reduce((previous, current) => {
//         return previous + current;
//     });
// }

// console.log(sum2(1, 2, 3));
// // expected output: 6

// console.log(sum2(1, 2, 3, 4));
// // expected output: 10
