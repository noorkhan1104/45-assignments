//dinner guests; working with one of the programs from exercise 14 throught 18 , print a message indicating the number of people you are inviting to dinner.
//copy ex 15
var guestList4 = ["babar", "hasnain", "naseem"];
// person who is not coming 
var cannotCome = "babar";
//console.log(cannotCome +" "+ "can't make a dinner")
var person3 = "rizwan";
guestList4[guestList4.indexOf(cannotCome)] = person3;
guestList4.forEach(function (name) {
    //console.log( `DEAR, ${name} you  are invited to dinner`)
});
//here print your new message 
guestList4.forEach(function (name) {
    //console.log(`Dear! ${name} I found a bigger dinner so I invited more guests.`)
});
//biggining guests
var name7 = "haris";
guestList4.unshift(name7);
//console.log (guestList2)
//middle guest
var name8 = "waseem";
var index2 = guestList4.length / 2;
guestList4.splice(index2, 0, name8);
//console.log(guestList2)
//end guets
var name9 = "abrar";
guestList4.push(name9);
//console.log(guestList2);
// now print new message to each guests 
guestList4.forEach(function (name) {
    //console.log(`Dear! ${name} you are invited for dinner`)
});
console.log(guestList4.length + " " + " guests" + " " + "are invited for dinner");
