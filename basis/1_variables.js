const accountId = 1234
let accountEmail = "deshwal@gmail.com"
var accountPassword = "2468"
accountCity = "Noida"
let accountState;

// accountId = 2 // not allowed


accountEmail = "kd@gmail.com"
accountPassword = "3579"
accountCity = "Goa"
console.log(accountId);

/*Prefer not to use var because of issue in block scope and functional scope*/
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])