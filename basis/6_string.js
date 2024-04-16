const name = "deshwal"
const repocount =50
console.log(`Hello my name is ${name} and my repo count is ${repocount}`);
const gameName = new String("K-deshwal")
console.log(gameName[0]);//find letter according to index
console.log(gameName.__proto__);
console.log(gameName.length);//length of word
console.log(gameName.toUpperCase());//capital letter
console.log(gameName.charAt(2));
console.log(gameName.indexOf('h'));
const newString = gameName.substring(0,4)
console.log(newString);
const anotherString = gameName.slice(-8,4)
console.log(anotherString);
//trim or replace 
const newStringOne="   deshwal "
console.log(newStringOne);
console.log(newStringOne.trim());
const url = "https://deshwal.com/k%20deshwal"
console.log(url.replace('%20','-'))
console.log(url.includes('deshwal'))
