"use strict";
var firstname = "Agus";
var lastname = "Priyatin";
var person = {
    firstname: firstname,
    lastname: lastname
};
function createPerson(firstname, lastname, age) {
    var fullname = firstname + ' ' + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
// console.log(person.firstname);
// console.log(person.lastname);
var p = createPerson("Agus", "Priyatin", 32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
