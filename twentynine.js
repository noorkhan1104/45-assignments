//// Favorite Fruit: Make a array of your favorite fruits, and then write a series of Independent if statements that check for certain fruits in your array. 
// Make a array of your three favorite fruits and call it favorite_fruits.
// Write five if statements. Each should check whether a certain kind of fruit is in your array. 
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!
//create an array
var favorite_fruits = ["Banana", "Apple", "Mango"];
if (favorite_fruits.includes("Banana")) {
    console.log("you really like banana!");
}
if (favorite_fruits.includes("Apple")) {
    console.log("you really like apple!");
}
if (favorite_fruits.includes("Mango")) {
    console.log("you really like mango!");
}
if (favorite_fruits.includes("orange")) {
    console.log("you really like orange!");
}
else {
    console.log("oranges are not in your list!.");
}
if (favorite_fruits.includes("kivis")) {
    console.log("you really like kivis!");
}
else {
    console.log("kivis are not in your list!");
}
