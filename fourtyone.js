//Magicians: Make a array of magician’s names.
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
var magicians = ["Akbar", "haris", "asif"];
function show_magicians1(Magicians) {
    magicians.forEach(function (magician) {
        return console.log(magician);
    });
}
show_magicians1(magicians);
