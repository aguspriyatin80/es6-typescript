"use strict";
// FUNCTIONAL SCOPE
function greetPerson(name) {
    if (name === "Agus") {
        var greet = "Hello Agus";
    }
    else {
        var greet = "Hai there";
    }
    console.log(greet);
}
greetPerson("Agus");
// HOISTING
function greetPerson2(name) {
    if (name === "Agus") {
        greet = "Hello Agus";
    }
    else {
        greet = "Hai there";
    }
    console.log(greet);
    var greet;
}
greetPerson2("Agus");
