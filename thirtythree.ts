//Ordinal numbers; ordinal numbers indicate their position in a array,such as 1st and 2nd. 
//most ordinal numbers end in the expect 1,2, and 3 
//store the numbers 1 through 9 in a array.
//loop through the array.
//use an if-else chain insdie the loop to print the proper ordinal ending for each num.
//ypu output should read like; 1st,2nd,3rd,4th,5th,6th,7th,8th,9th.
let numbers:number[]=[1,2,3,4,5,6,7,8,9];
for(let number of numbers){
    let ordinalEnding:string;
    if( number === 1){
        ordinalEnding = "st"
    }else if( number === 2){
        ordinalEnding ="nd"
    }else if(number === 3){
        ordinalEnding ="rd"
    }else( ordinalEnding = "th")

//print the number with its proper ordinal ending.
console.log(`${number}${ordinalEnding}`);
}