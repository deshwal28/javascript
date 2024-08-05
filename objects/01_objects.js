//singleton
//object literals
//Object.create
const mySym=Symbol("key1")
const JsUser ={
name:"Deshwal",
Age:19,
[mySym]:"mykey1",
Location : "Greater Noida",
Email:"deshwalkhush@gmail.com",
letsloginDays:["Monday","Saturday"]

}
console.log(JsUser.Email)
console.log(JsUser["Email"])
console.log(JsUser[mySym])

JsUser.Email="deshwalkhush@gmail.com"
//Object.freeze(JsUser)
JsUser.Email="deshwal@gmail.com"
console.log(JsUser);
JsUser.greeting=function(){
    console.log("Hello Js user");
}

JsUser.greetingTwo=function(){
    console.log(`Hello Js user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
