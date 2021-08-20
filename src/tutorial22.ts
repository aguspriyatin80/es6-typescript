class People {
    constructor(name: string) {
        this.name = name;
        console.log(`${this.name} Constructor`);
    }
    static staticMethod() {
        console.log('Static Method');

    }
    helloPerson() {
        console.log(`hello ${this.name}`);

    }
}

let p = new People("Agus");
People.staticMethod();
p.helloPerson();
