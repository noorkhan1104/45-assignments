//Cars: Write a function that stores information about a car in a Object. 
//The function should always receive a manufacturer and a model name. 
//It should then accept an arbitrary number of keyword arguments.
// Call the function with the required information and two other name-value pairs, such as a color or an optional feature.
// Print the Object that’s returned to make sure all the information was stored correctly.

import { stringify } from "querystring";

type car ={
    manufacturer : string;
    ModelName: string;
    [key: string]: any;
}
function carInfo ( manufacturer:string, ModelName:string, options: Partial<car>): car{
    return{
        manufacturer: manufacturer,
        ModelName:ModelName,
        ...options
    };
}

let car =carInfo("dodge","challenger",{color:'matte black',year: 2018});

console.log(car);
