// Write a function called 'divide' that takes two parameters: a numerator and a denominator.

// Your function should return the result of numerator / denominator.

// However, if the denominator is zero you should throw the error, "Attempted to divide by zero."

// Code your divide function here:

// let divide = (numerator, denominator) => {
//     if (denominator > 0) {
//         numerator / denominator;
//     } throw new Error("Attempt to divide by zero.")
// };

// try {
//     divide(3/0);
// } catch(err) {
//     console.log(err); 
// } 

function divide(numerator, denominator) {
    if (denominator === 0) {
       throw Error('You cannot divide by zero!');
    }
    return numerator/denominator;
 }
