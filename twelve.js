//Greetings: Start with the array you used in exercise 11, but instead of printing each person's name . Print a messsage to them.
// the text of each message should be the same, but each message should be personlized with the person's name .
var names2 = ["Babar", "Hasnain", "Shadab", "Naseem"];
names2.forEach(function (name) {
    console.log("Dear ".concat(name, " Have a great match!"));
});
