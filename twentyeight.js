//St my ages of Life: Write an if-else chain that determines a person's st my_age of life.
// Set a value for the variable my age, and then:
// If the person is less than 2 years old, print a mess my_age that the person is a baby. 
// If the person is at least 2 years old but less than 4, print a mes smy age that the person is a toddler. 
//If the person is at least 4 years old but less than 13, print a mess my age that the person is a kid. 
//if the person is at least 13 years old but less than 20, print a message that the person is teenager.
// If the person is at least 20 years old but less than 65, print a mess my_age that the person is an adult. 
// If the person is my age 65 or older, print a mess my age that the person is an elder.
var my_age = 80;
if (my_age < 2) {
    console.log("i am a baby");
}
else if (my_age >= 2 && my_age < 4) {
    console.log("the person is toddler");
}
else if (my_age >= 4 && my_age < 13) {
    console.log("the person is kid");
}
else if (my_age >= 13 && my_age < 20) {
    console.log("the person is teenager");
}
else if (my_age >= 20 && my_age < 65) {
    console.log("the person is adult");
}
else {
    console.log("the person is elder");
}
