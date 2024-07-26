/*function sayMyName(){
    console.log("D");
    console.log("E");
    console.log("S");
    console.log("S");
    console.log("W");
    console.log("A");
    console.log("L");
}*/
//sayMyName()
function addTwoNumbers(number1,number2){
    let result = number1+number2
    return result
//console.log(number1+number2);
}
//addTwoNumbers(3,4)
const result = addTwoNumbers(3,5)
console.log("Result:",result);
function loginUserMessage(username){
    return`${username}just logged in`
}
console.log(loginUserMessage("Deshwal"))