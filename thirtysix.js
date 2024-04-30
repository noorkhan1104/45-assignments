//T-shirts: write a function called make _shirts()
//that accept size and the text of a message that should be printed on the shirts.
// the function should print a sentence summerizing a size of the shirt and the message printed on it.
// call the function.
function make_shirt(size, message) {
    console.log("you have ordered a ".concat(size, "-sized shirt with the message:\"").concat(message, "\"."));
}
//calling the function.
make_shirt("large", "keep coding!");
