const firstname = "Agus";
const lastname = "Priyatin";

const person = {
    firstname,
    lastname
}

function createPerson(firstname, lastname, age) {
    let fullname = firstname + ' ' + lastname;
    return {
        firstname,
        lastname,
        fullname,
        isSenior: function () {
            return age > 60;
        }
    }

}
// console.log(person.firstname);
// console.log(person.lastname);

let p = createPerson("Agus", "Priyatin", 32);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());