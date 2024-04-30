//changing guest list: you just  heard that one of your guest can't make the dinner, so you need to sen out the new set of invitation. 
// you'll have to think of somenone else to invite.
var guestList1 = ["babar", "hasnain", "naseem"];
// person who is not coming 
var cannotCome = "babar";
// now print a message with person name.
console.log(cannotCome + " " + "can't make a dinner");
//new person who attend dinner 
var person = "rizwan";
// replacing the name in to array
guestList1[guestList1.indexOf(cannotCome)] = person;
//now print a message to all in your list 
guestList1.forEach(function (name) {
    console.log("DEAR, ".concat(name, " you  are invited to dinner"));
});
