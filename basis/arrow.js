const user = {
    username:"deshwal",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
    }
}
//user.welcomeMessage()
//user.username ="sam"
//user.welcomeMessage()
//console.log(this);
//function chai(){
    //console.log(this);
//}
//chai()
const chai = function(){
    let username = "deshwal"
    console.log(this);
}
//chai()
//const addTwo = (num1 , num2)=>{
    //return num1 + num2
//}
const addTwo = (num1,num2)=>num1+num2
console.log(addTwo(3,4))
