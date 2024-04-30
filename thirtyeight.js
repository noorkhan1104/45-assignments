//cities ; write a function called describe_cities()
function describe_cities(city, country) {
    if (country === void 0) { country = "unknown"; }
    console.log("".concat(city, " is in \"").concat(country, "."));
}
//calling the function for three different cities 
describe_cities('karachi', 'pakistan');
describe_cities('newyork', 'USA');
describe_cities('paris');
