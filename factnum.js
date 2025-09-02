let number = parseInt(prompt("Enter a number"));
let copy = number;
let fact = 1;
if(copy == 0){
    console.log("factorial is 1");
}
else{
    while(copy>0){
        fact= fact*copy;
        copy--;
    }
    console.log(`factorial is ${fact}`);
}