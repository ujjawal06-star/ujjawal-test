let str = ['hi', 'hello', 'bye', '!'];

function concat(str){
    let res="";
    for(let i = 0; i<str.length; i++){
        res+=str[i];
    }
    return res;
}

console.log(concat(str));