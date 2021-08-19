var getRegValue = function () {
    return 10;
}

console.log(getRegValue());

// arrow function without parameter
const getArrValue = () => {
    return 10;
}
console.log(getArrValue());

// arrow function with only one parameter
const getArrValueParameter = m => 10 * m;

console.log(getArrValueParameter(5));

// arrow function with more than one parameter
const getArrValueParameter2 = (m: number, bonus: number) => 10 * m + bonus;
console.log(getArrValueParameter2(5,50));

console.log(typeof getArrValue);