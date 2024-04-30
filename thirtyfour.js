//pizzas; think of at least three of your fav pizza.
//store these pizza name in a array, and then use a lopp to print the name of pizza.
//modify your loop for print a sentence using the name of the pizza 
//just the name of the pizza, each pizza you should have one line of output conatains
//like i like pepperoni pizza.
// add a line at the end of your program,outside the loop, that states how much you like pizza.
//the output should consist of three or more lines about the kinds of pizza you like ;
//sentence such as i really love  pizza!
var favorite_pizza = ["pepperoni", "cheese", "bbq chicken"];
console.log("printing a sentence for each pizza:");
for (var _i = 0, favorite_pizza_1 = favorite_pizza; _i < favorite_pizza_1.length; _i++) {
    var pizza = favorite_pizza_1[_i];
    console.log(" I Like ".concat(pizza, " pizza."));
}
//additional sentence expressing love for pizza.
console.log('\n These are some of my favorite pizzas, and i really like them.');
