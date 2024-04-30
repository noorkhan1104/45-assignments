//dinner guests; working with one of the programs from exercise 14 throught 18 , print a message indicating the number of people you are inviting to dinner.
//copy ex 15
let guestList4: string[]= ["babar","hasnain","naseem"]

// person who is not coming 
let cannotCome : string= "babar";

//console.log(cannotCome +" "+ "can't make a dinner")
 
let person3:string= "rizwan";
guestList4[guestList4.indexOf(cannotCome)]= person3

guestList4.forEach(name =>{
//console.log( `DEAR, ${name} you  are invited to dinner`)
}); 
//here print your new message 
guestList4.forEach(name=>{
    //console.log(`Dear! ${name} I found a bigger dinner so I invited more guests.`)
});
//biggining guests
let name7:string= "haris"
guestList4.unshift(name7)
//console.log (guestList2)

//middle guest
let name8: string ="waseem";
let index2=guestList4.length/2;
guestList4.splice(index2,0,name8);
//console.log(guestList2)

//end guets
let name9: string= "abrar";
guestList4.push(name9);
//console.log(guestList2);

// now print new message to each guests 
guestList4.forEach(name =>{
    //console.log(`Dear! ${name} you are invited for dinner`)
});
console.log(guestList4.length+" "+" guests"+" " +"are invited for dinner")