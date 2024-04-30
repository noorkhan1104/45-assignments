24.; // More Conditional Tests: 
//You don't have to limit the number of tests you create to 10.
// If you want to try more comparisons, write more tests. 
//Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
//• Tests using "and" and "or" operators 
//• Test whether an item is in a array 
//• Test whether an item is not in a array
//create two variable
var string1 = "noor";
var string2 = "sahar";
console.log(string1 === "noor"); //i predict true
console.log(string1 !== string2); // i predict true 
//Tests using the lower case function
console.log("is 'string1' is equal to 'noor' after converting to lowercase ? i predict true");
console.log("".concat(string1).toLowerCase() === 'noor');
console.log("is 'string1' is equal to 'Noor' after converting to lowercase ? i predict false");
console.log("".concat(string1).toLowerCase() === 'Noor');
//// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to 
//• Tests using "and" and "or" operators 
//create more 2 variable
var number1 = 10;
var number2 = 20;
console.log(number1 === 10); // i predict true 
console.log(number1 === number2); // i predict false 
console.log(number1 < number2); // i predict true
console.log(number1 > number2); // i predict false 
console.log(number1 <= 20); // i predict true 
console.log(number1 >= 20); // i predict false
//• Tests using "and" and "or" operators
var bol1 = true;
var bol2 = false;
console.log(bol1 && bol2); // i predict false 
console.log(bol1 || bol2); // i predict true
////• Test whether an item is in a array .
var array = [1, 2, 3, 4, 5];
console.log(array.includes(3)); // i predict true 
///• Test whether an item is not in a array
console.log(array.includes(6)); // i predict true
