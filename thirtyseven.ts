//large shirt // Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
//Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.



function make_shirt2(size:string, message:string):void{
    console.log(`you have ordered a ${size}-sized shirt with the message:"${message}".`)
    
}
//calling the function.
make_shirt2("large","i love Typescript");
//create a medium shirt with the default message 
make_shirt2("medium","i love Typescript.")

//create a shirt of any size with a different message
make_shirt2("short","keep coding.")