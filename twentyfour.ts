24.// More Conditional Tests: 
//You don't have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
//• Tests using "and" and "or" operators 
//• Test whether an item is in a array 
//• Test whether an item is not in a array

//create two variable

let string1: string= "noor";
let string2 : string= "sahar";
console.log(string1 === "noor"); //i predict true

console.log(string1!== string2) // i predict true 

//Tests using the lower case function
console.log("is 'string1' is equal to 'noor' after converting to lowercase ? i predict true")
console.log(`${string1}`.toLowerCase() === 'noor');
console.log("is 'string1' is equal to 'Noor' after converting to lowercase ? i predict false")
console.log(`${string1}`.toLowerCase() === 'Noor');

//// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
//• Tests using "and" and "or" operators 
//create more 2 variable
 let number1: number= 10;
 let number2: number= 20;
 console.log( number1 === 10); // i predict true 
 console.log(number1 === number2); // i predict false 

 console.log( number1 < number2); // i predict true
 console.log(number1 > number2); // i predict false 

 console.log( number1 <= 20); // i predict true 
 console.log(number1 >= 20); // i predict false

 //• Tests using "and" and "or" operators
 let bol1: boolean= true;
 let bol2: boolean= false; 
 console.log(bol1 && bol2); // i predict false 
 console.log(bol1 || bol2); // i predict true

////• Test whether an item is in a array .
let array: number[]=[1,2,3,4,5]
console.log(array.includes(3)); // i predict true 

///• Test whether an item is not in a array
console.log(!array.includes(6)); // i predict true


