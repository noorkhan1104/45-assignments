//large shirt;modify the make_shirt()
function make_shirt2(size, message) {
    console.log("you have ordered a ".concat(size, "-sized shirt with the message:\"").concat(message, "\"."));
}
//calling the function.
make_shirt2("large", "i love Typescript");
//create a medium shirt with the default message 
make_shirt2("medium", "i love Typescript.");
//create a shirt of any size with a different message
make_shirt2("short", "keep coding.");
