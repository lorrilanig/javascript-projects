function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
  for (let i = 0; i < arr.length; i++) {
    i = Math.floor(Math.random()*arr.length);
    return arr[i];
  }
};

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;