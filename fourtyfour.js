//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
// The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. 
//Call the function three times, using a different number of arguments each time.
function ordersandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("you ordered a sandwich with the following items:");
    items.forEach(function (items) { return console.log("-" + items); });
    console.log("enjoy your sandwich!");
}
ordersandwich("bread", "tomato", "ketchup.");
ordersandwich("mayo", "garlic", "tomato", "onion");
ordersandwich("peanut butter", "bread");
ordersandwich("bread");
