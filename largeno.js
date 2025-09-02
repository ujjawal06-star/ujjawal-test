let arr = [2, 4, 5, 9, 17];
let max = -1;
for(let i = 0; i<arr.length;i++){
    if(arr[i]>max){
        max=arr[i];
    }
}
console.log(max);