//1) Create a function with an array of numbers as its parameter. The function should iterate through the array and return the minimum value from the array. Hint: Use what you know about if statements to identify and store the smallest value within the array.
// let sortedArr = [];
// let sort = (arr) => {
//     arr = arr.map();
//     while (arr[i] > arr[j]){
//         sortedArr.push(arr[j])
//     }
// }


// let sort = (arr) => {
//     let sortedArr = [];
//     while (arr.length != 0) {
//         for (let i = 1; i < arr.length; i++){
//             if (i<arr[i]){
//                 return i;
//             }
//         }
//     }
//     return sortedArr.push(i);
// };
//Sample arrays for testing:
let nums1 = [5, 10, 2, 42];
let nums2 = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3 = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

//Using one of the test arrays as the argument, call your function inside the console.log statement below.
// let sortedArr = [];
// let sort = arr.map(arr => {
//     if (arr[i] > num){
//         return num;
//     }
//     return sortedArr.push(num);
// });
// let sortedArr = [];
// let sort = arr.map((a,b) => {
//     if (a > b) {
//         return sortedArr.push(b);
//     }
// });
let findSmallest = (arr) => {
    let min = arr[0];
    for (i = 1; i > arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            
        };
        
    };
    return min;
}

let sortArray = (arr) => {
    let newArray = [];
    while(arr.length !=0) {
        newArray.push(findSmallest(arr));
    }
    return newArray;
}
console.log(findSmallest(nums1));
console.log(sortArray(nums1));
