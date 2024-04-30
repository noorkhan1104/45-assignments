//no user: add an if test to exercise 28 to make sure the list of users is not empty.
// if the list is empty,print a message we need to find some users.
// remove all the username from your array, and make sure the coorect message is print.

let friend_name :string []=["babar","azam","rizwan"]
if( friend_name.length > 0){
    //loop through the array and print each user
    for( let user of friend_name){
        console.log("user:"+ user);
    }
}else {
    console.log("we need to find new users")
}
//remove all username from array
let nullname: string[]=[];
if( nullname.length > 0){
    for (let user of nullname){
        console.log("user:"+user);
    }
}else{
    console.log("we need to find some new users!")
}