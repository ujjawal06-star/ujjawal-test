let arr = [8, 9, 10, 1, 2, 3, 4, 5, 6, 7];
let num = 5;

//elements larger than a number num 
function getElements(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            console.log(arr[i]);
        }
    }
}

getElements(arr, num); 