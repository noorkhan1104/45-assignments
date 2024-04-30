//more guest : you just found a bigger dinner table. so now more space is available.
// think of three more guests to invite to dinner.
//start from your program exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// add your guest to the biginning of your array.
// add one more guest in the middle of your array. use append() to add one new guest to the end of your list . print a set of invitation messages, one of each person of your list.
//copy exercise 15.

let guestList2: string[]= ["babar","hasnain","naseem"]
let cannotCome1 : string= "babar";
//console.log(cannotCome1 +" "+ "can't make a dinner")

let person1:string= "rizwan";
guestList2[guestList2.indexOf(cannotCome1)]= person1
//now print a message to all in your list 

//guestList2.forEach(name =>{
//console.log( `DEAR, ${name} you  are invited to dinner`)
//}); 
//here print your new message 
guestList2.forEach(name=>{
    //console.log(`Dear! ${name} I found a bigger dinner so I invited more guests.`)
});
//biggining guests
let name1:string= "haris"
guestList2.unshift(name1)
//console.log (guestList2)

//middle guest
let name2: string ="waseem";
let index=guestList2.length/2;
guestList2.splice(index,0,name2);
//console.log(guestList2)

//end guets
let name3: string= "abrar";
guestList2.push(name3);
//console.log(guestList2);

// now print new message to each guests 
guestList2.forEach(name =>{
    console.log(`Dear! ${name} you are invited for dinner`)
});