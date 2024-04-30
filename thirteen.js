// Your own array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples.
// use your list to print a series of statements about these items. such as "i would like to own a Honda motorcycle".
var transportation = ["BMW", "Dodge", "Porsche", "bugatti"];
transportation.forEach(function (name) {
    console.log("\"i would like to own a ".concat(name, "\""));
});
