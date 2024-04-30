//Greetings: Start with the array you used in exercise 11, but instead of printing each person's name . Print a messsage to them.
// the text of each message should be the same, but each message should be personlized with the person's name .

let names2 : string[]= ["Babar", "Hasnain","Shadab","Naseem"];
  
names2.forEach(name => {
    console.log ( `Dear ${name} Have a great match!`)
})