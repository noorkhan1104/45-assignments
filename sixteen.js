//more guest : you just found a bigger dinner table. so now more space is available.
// think of three more guests to invite to dinner.
//start from your program exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// add your guest to the biginning of your array.
// add one more guest in the middle of your array. use append() to add one new guest to the end of your list . print a set of invitation messages, one of each person of your list.
//copy exercise 15.
var guestList2 = ["babar", "hasnain", "naseem"];
var cannotCome1 = "babar";
//console.log(cannotCome1 +" "+ "can't make a dinner")
var person1 = "rizwan";
guestList2[guestList2.indexOf(cannotCome1)] = person1;
//now print a message to all in your list 
//guestList2.forEach(name =>{
//console.log( `DEAR, ${name} you  are invited to dinner`)
//}); 
//here print your new message 
guestList2.forEach(function (name) {
    //console.log(`Dear! ${name} I found a bigger dinner so I invited more guests.`)
});
//biggining guests
var name1 = "haris";
guestList2.unshift(name1);
//console.log (guestList2)
//middle guest
var name2 = "waseem";
var index = guestList2.length / 2;
guestList2.splice(index, 0, name2);
//console.log(guestList2)
//end guets
var name3 = "abrar";
guestList2.push(name3);
//console.log(guestList2);
// now print new message to each guests 
guestList2.forEach(function (name) {
    console.log("Dear! ".concat(name, " you are invited for dinner"));
});
