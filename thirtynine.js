//cities ; write a function called city_country() that takes in the name of a city and its country.
// the function should return a string formatted like this:
//"lahore","pakistan".
function city_country(city, country) {
    return "".concat(city, ",").concat(country);
}
// calling the function with three city_country pairs;
var city1 = city_country('lahore', 'pakistan');
var city2 = city_country('new york', 'USA');
var city3 = city_country('paris', 'france');
//printing the values returning by the function
console.log(city1);
console.log(city2);
console.log(city3);
