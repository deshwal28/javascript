//Data types:-
//1-primitive
//7 Types:String,number,boolean,null,undefined,symbol(used to make value unique),BigInt.
const score = 100
const scorevalue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; 
const id = Symbol('123');
const anotherId = Symbol('123')
console.log(id===anotherId);

//const bigNumber=324567891234567n
//2-Non-primitive(Reference)
//Array,objects,Functions.

const heros = ["Ram","shiv","Hanuman"]//array
let myObj={
    name:"deshwal",//object
    age:20,
}
const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof myFunction);