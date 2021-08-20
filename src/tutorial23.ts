class Persons {
    constructor(name) {
        console.log(`${name} Person constructor`);
    }
    getID() {
        return 10;
    }
}

class Employee extends Persons {
    constructor(name) {
        super(name);
        console.log(`${name} Employee constructor`);
    }
    getID() {
        return super.getID();
    }
}

let e = new Employee("Agus");
console.log(e.getID());