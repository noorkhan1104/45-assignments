//shrinking guests lists

// copy exercise 16
let guestList3: string[]= ["babar","hasnain","naseem"]
let cannotCome2 : string= "babar";
//console.log(cannotCome2 +" "+ "can't make a dinner")

let person2:string= "rizwan";
guestList3[guestList3.indexOf(cannotCome2)]= person2
//now print a message to all in your list 

//guestList2.forEach(name =>{
//console.log( `DEAR, ${name} you  are invited to dinner`)
//}); 
//here print your new message 
guestList3.forEach(name=>{
    //console.log(`Dear! ${name} I found a bigger dinner so I invited more guests.`)
});
//biggining guests
let name4:string= "haris"
guestList3.unshift(name4)
//console.log (guestList2)

//middle guest
let name5: string ="waseem";
let index1=guestList3.length/2;
guestList3.splice(index1,0,name5);
//console.log(guestList2)

//end guets
let name6: string= "abrar";
guestList3.push(name6);
//console.log(guestList2);

// now print new message to each guests 
guestList3.forEach(name =>{
   // console.log(`Dear! ${name} you are invited for dinner`)
});

// print first line of ex 17
console.log("i have space for two guests.");

// remove guests from list one at a time until only two guests name remain in your list
// each time you pop a name from your list.
// print a message to that person letting them know you're sorry you can't invite them to dinner.
// remove guests by using while loop

console.log(guestList3)
while(guestList3.length>2){
    let removePerson=guestList3.pop()
    //print message 
    console.log(`Dear! ${removePerson} Sorry I can't invite you for dinner.`)
}
//print message those who are still invited
guestList3.forEach(name=>{
    console.log(`dear! ${name} you are still invited for dinner.`)
})

// create empty list and print it
guestList3.pop()
guestList3.pop()
console.log(guestList3)