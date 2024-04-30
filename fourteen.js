// guest list :
// if you could invite anyone , living and deceased , to dinner , who would you invite ?
// make a list that includes at least three people you'd like to invite to dinner. then use your list to print a message to each person, inviting them to dinner. 
var guestlist = ["babar", "hasnain", "naseem"];
guestlist.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nyou are invited to dinner, we would like to enjoy your company "));
});
