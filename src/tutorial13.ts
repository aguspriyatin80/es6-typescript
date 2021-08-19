let displayColors = ((message: string, ...colors) => {
    console.log(message);
    console.log(colors);
    for (let i in colors) {
        console.log(colors[i]);
    }
});
let message = "List of colors";
displayColors(message, "Red");
displayColors(message, "Red", "Blue");
displayColors(message, "Red", "Blue", "Green");

