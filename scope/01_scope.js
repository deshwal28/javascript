let a= 300
if(true){
    let a=10
    const b=20
    //console.log("INNER:",a)
    
}
/*for(let i =0;i<Array.length;i++){
    const element =array[i];
}*/

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username ="deshwal"
    function two(){
        const website = "youtube"
        //console.log(username);
    }
    //console.log(website)
    two()
}
one()
if(true){
    const username ="deshwal"
    if(username==="deshwal"){
        const website=" youtube"
        //console.log(username+website);
       }
       //console.log(website);
}
//console.log(username);

//*************interesting*************
function addone(num){
    return num+1
}
addone(5)
const addTwo = function(num){
    return +2
}
addTwo(5)
