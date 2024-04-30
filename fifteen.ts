//changing guest list: you just  heard that one of your guest can't make the dinner, so you need to sen out the new set of invitation. 
// you'll have to think of somenone else to invite.

let guestList1: string[]= ["babar","hasnain","naseem"]

// person who is not coming 
let cannotCome : string= "babar";

// now print a message with person name.
console.log(cannotCome +" "+ "can't make a dinner")

//new person who attend dinner 
let person:string= "rizwan";

// replacing the name in to array
guestList1[guestList1.indexOf(cannotCome)]= person

//now print a message to all in your list 
guestList1.forEach(name =>{
console.log( `DEAR, ${name} you  are invited to dinner`)
}); 