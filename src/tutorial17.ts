const employee = ["agus", "priyatin", "female"];
// const [fname, lname, gender] = employee;
// const [fname, ...elements] = employee;
const [fname, lname, gender = "male"] = employee;
console.log(gender);
