
/* Write a function called same, which accepts two arrays. The function should return true if every value in the array has it’s corresponding value squared in the second array. The frequency of values must be the same.
 */

// are the squared values of the first array present in the second? The count of each value in the first array must be the same as the second

// Two arrays with Numbers
// booleans 
// outputs can be determiend from inputs
// see naming later

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  } 
  let obj1 = {};
  let obj2 = {};
  //make an object with the frequencies of each each number  in the first - square the keys 
  //make an object with the frequencies
  arr1.forEach(n => {
    const n2 = Math.pow(n, 2)
    obj1[n2] ? obj1[n2]++ : obj1[n2] = 1
  });

  arr2.forEach(n => {
    obj2[n] ? obj2[n]++ : obj2[n] = 1;
  })

 return JSON.stringify(obj1) === JSON.stringify(obj2);
}

// same([1, 2, 3], [4,1,9]); // true

module.exports = {same}