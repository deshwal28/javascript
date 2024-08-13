//for
for (let i = 0; i< 10; i++) {
    const element = i;
    if(element==5){
    console.log("5 is the beest number");
    }
    console.log(element);
    
}
for(let i = 0 ; i<=10;i++){
    console.log(`outer loop value:${i}`)
    for(let j = 0 ;j<=10;j++){
        console.log(i+'*'+j+ ' = '+ i*j);

    }
}
//break and continue
for (let index = 1; index <=20; index++) {
    console.log(`value of i is ${index}`);
    //const element = array[index];
    
}