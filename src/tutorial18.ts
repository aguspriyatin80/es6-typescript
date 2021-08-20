let employee = {
    fname: "Agus",
    lname: "Priyatin"


}
// let { fname, lname, age } = employee;
let { fname: f, lname: l, gender: g = "female" } = employee; // using alias and default

// console.log(fname);
console.log(f);
console.log(l);
console.log(g);