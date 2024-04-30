//cities ; write a function called describe_cities()


function describe_cities(city:string, country:string ="unknown"):void{
    console.log(`${city} is in "${country}.`);

}

//calling the function for three different cities 
describe_cities('karachi','pakistan');
describe_cities('newyork','USA')
describe_cities('paris')