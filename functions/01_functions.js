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
function calculateCartPrice(val1, val2 ,...num1){
    return num1

}
console.log(calculateCartPrice(200,400,500))
const user ={
    username:"deshwal",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${antobject.username}and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({username:"sam",price:399

}) 
const myNewArray=[200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,600,800]));