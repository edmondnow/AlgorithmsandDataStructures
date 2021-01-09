// write a function called sum zero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. return an array that includes the values that sum to zer or undefined if a pair does not exist

// if the sum of two numbers is 0 return the numbers other undefined from the sorted array
function sumZero(arr) {
  console.log(">>")
  if (!(arr.some(v => v < 0) || arr.some(v => v > 0))) return undefined

  let l = 0;
  let r = arr.length - 1;
  let results;

  while(!!Math.sign(arr[l])) {
      if (arr[r] + arr[l] === 0) results = [arr[r], arr[l]]
      
      if (arr[r - 1] < 0) {
        r = arr.length - 1
        l = l + 1
      } else {
        r--;
      }
    }

    return results;
  }
  


// sumZero([-3, -2, -1, 0, 1, 2, 3]) // [-3, 3];
// sumZero([1, 2, 3])

module.exports = {sumZero}
