//no user: add an if test to exercise 28 to make sure the list of users is not empty.
// if the list is empty,print a message we need to find some users.
// remove all the username from your array, and make sure the coorect message is print.
var friend_name = ["babar", "azam", "rizwan"];
if (friend_name.length > 0) {
    //loop through the array and print each user
    for (var _i = 0, friend_name_1 = friend_name; _i < friend_name_1.length; _i++) {
        var user = friend_name_1[_i];
        console.log("user:" + user);
    }
}
else {
    console.log("we need to find new users");
}
//remove all username from array
var nullname = [];
if (nullname.length > 0) {
    for (var _a = 0, nullname_1 = nullname; _a < nullname_1.length; _a++) {
        var user = nullname_1[_a];
        console.log("user:" + user);
    }
}
else {
    console.log("we need to find some new users!");
}
