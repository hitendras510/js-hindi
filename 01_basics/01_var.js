const accountid = 14453
let accountEmail = "hitendra@gmail.com"
var accountpassword = "12345"
accountcity = "jaipur"

// accountid = 2 //not allowed

/* 
prefer not to use var 
because issue in block scope and functional scope
*/

accountEmail = "hiendra@xyz"
accountpassword = "6969"
accountcity = "sihora"

console.log(accountid);

console.table([accountid, accountEmail, accountpassword, accountcity]) 
//used when different elements are need to be representedor say when console.log( )are used different time 

