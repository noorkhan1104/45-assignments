//cities ; write a function called city_country() that takes in the name of a city and its country.
// the function should return a string formatted like this:
//"lahore","pakistan".


 
function city_country(city:string, country:string):string{
    return`${city},${country}`;
}
// calling the function with three city_country pairs;
let city1:string = city_country('lahore', 'pakistan');
let city2: string= city_country('new york','USA');
let city3:string = city_country('paris','france');

//printing the values returning by the function
console.log( city1);
console.log(city2);
console.log(city3);


