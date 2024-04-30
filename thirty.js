//hello admin: make a array of five or more username,
//including the name "admin". imagine you are writing code that will print a list greeting to each user.
//after they login to a website .loop through the array,and print a greeting to each user;
//if the username is admin , print a special greeting.
//such as hello admin! would you like to see a status report?
//otherwise,print a generic greeting , such as hello Eric , thankyou for loggin in again.
var usernames = ["admin", "babar", "naseem", "rizwan", "hasnain"];
for (var _i = 0, usernames_1 = usernames; _i < usernames_1.length; _i++) {
    var username = usernames_1[_i];
    if (username === "admin") {
        console.log("hello admin! would you like the status report?");
    }
    else
        (console.log("hello ".concat(username, " , thankyou for logging in login.")));
}
