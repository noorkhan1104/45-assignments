// Allen Colors #1: Imagine an allen was just shot down in a game.
// Create a variable called alien color and assign it a value of 'green', 'yellow', or 'red'. 
// write an if statement to test wheater the aliens color is green 
// if it is, print a message that the player just earned 5 points.  
// (The version that falls will have no output.)
// write one version of this program that passes the if test and another that fails.
//create a variable 
var alien_color = "green";
if (alien_color === "green") {
    console.log("congratulations ! you just earned 5 points");
}
else {
    console.log("congratulations! you just earned 10 points for shooting the non-green alien.");
}
var alien_color1 = "red";
if (alien_color1 === "green") {
    console.log("failed");
}
else {
    console.log("congratulations! you just earned 10 points for shooting the non-green alien.");
}
