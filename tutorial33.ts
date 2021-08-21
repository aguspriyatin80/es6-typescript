let myMaps = new Map([
    ["fname", "Chandler"],
    ["lname", "Bing"]
]);

for (let [key, value] of myMaps.entries()) {
    console.log(`${key} -> ${value}`);
}

for (let value of myMaps.values()) {
    console.log(value);
}

for (let key of myMaps.keys()) {
    console.log(key);
}

/* use command this
tsc tutorial33.ts --downlevelIteration
*/