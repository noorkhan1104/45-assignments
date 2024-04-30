// Checking Usernames: Do the following to create a program that simulates how websites.
 // a unique username. 
 // Make a list of five or more usernames called current_users
  // Make another list of five usernames called new_users. 
  // Make sure one or two of the new usernames are also in the current_users list. 
  //. Loop through the new_users list to see if each new username has already been used.
   // If it has, print a message that the person will need to enter a new username. 
   // If a username has not been used, print a message saying that the username is available 
   // Make sure your comparison is case insensitive. 
   // If 'John' has been used, 'JOHN' should not be accepted.
let current_users:string[]=["babar","rizwan","shadab","hassan","hasnain"];
let new_users: string[]=["hasnain","haris","nawaz","irfan","babar"];
 
for(let new_username of new_users){
   new_username.toLocaleLowerCase();
   let found= false;

   for (let existing_username of current_users){
      if (existing_username.toLocaleLowerCase() === new_username){
         found= true;
         break;
      }
      
   }
   if (found){
      console.log(`username'${new_username}'is not available. please enter a new username`)
}else{
   console.log(`username '${new_username}'is available.`);
}
}