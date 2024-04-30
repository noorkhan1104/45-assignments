//shrinking guests lists
// copy exercise 16
var guestList3 = ["babar", "hasnain", "naseem"];
var cannotCome2 = "babar";
//console.log(cannotCome2 +" "+ "can't make a dinner")
var person2 = "rizwan";
guestList3[guestList3.indexOf(cannotCome2)] = person2;
//now print a message to all in your list 
//guestList2.forEach(name =>{
//console.log( `DEAR, ${name} you  are invited to dinner`)
//}); 
//here print your new message 
guestList3.forEach(function (name) {
    //console.log(`Dear! ${name} I found a bigger dinner so I invited more guests.`)
});
//biggining guests
var name4 = "haris";
guestList3.unshift(name4);
//console.log (guestList2)
//middle guest
var name5 = "waseem";
var index1 = guestList3.length / 2;
guestList3.splice(index1, 0, name5);
//console.log(guestList2)
//end guets
var name6 = "abrar";
guestList3.push(name6);
//console.log(guestList2);
// now print new message to each guests 
guestList3.forEach(function (name) {
    // console.log(`Dear! ${name} you are invited for dinner`)
});
// print first line of ex 17
console.log("i have space for two guests.");
// remove guests from list one at a time until only two guests name remain in your list
// each time you pop a name from your list.
// print a message to that person letting them know you're sorry you can't invite them to dinner.
// remove guests by using while loop
console.log(guestList3);
while (guestList3.length > 2) {
    var removePerson = guestList3.pop();
    //print message 
    console.log("Dear! ".concat(removePerson, " Sorry I can't invite you for dinner."));
}
//print message those who are still invited
guestList3.forEach(function (name) {
    console.log("dear! ".concat(name, " you are still invited for dinner."));
});
// create empty list and print it
guestList3.pop();
guestList3.pop();
console.log(guestList3);
