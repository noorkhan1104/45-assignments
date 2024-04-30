// Name cases: store a person's name in a variable,
//and then print that person's name in lowercase, uppercase, and titlecase.

let person_name : string = "noor";
//lowercase
console.log("lowercase:" + person_name.toLowerCase());
//uppercase
console.log("uppercase:" + person_name.toUpperCase());
//titlecase
let title_case= person_name[0].toUpperCase() + person_name.slice(1).toLowerCase();
console.log("titlecase:" + title_case);
