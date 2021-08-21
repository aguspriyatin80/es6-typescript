let myMap1 = new Map([
    ["fname", "Chandler"],
    ["lname", "Bing"]
]);

for (let [key, value] of myMap1.entries()) {
    console.log(`${key} -> ${value}`);
}

for (let value of myMap1.values()) {
    console.log(value);
}

for (let key of myMap1.keys()) {
    console.log(key);
}