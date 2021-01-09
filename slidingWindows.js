// function that accepts an array of unsorted integers, and a number called n. This function should calculate the maximum sum of n consecutive element

// Restate: calculate highest consecutive sum
// inputs array and a number
// outputs a number --- the sum
// i -> o is good


//maxSubarraySum([1, 2, 5, 2, 8, 11, 5], 2) //10
//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
//maxSubarraySum([], 4) //null


function maxSubarraySum(arr, n) {
  if(n > arr.length) return null;
  let maxSum = 0;
  let tempSum = 0;


  maxSum = arr.slice(0, n).reduce((acc, n) =>  acc + n );

  tempSum = maxSum
  
  for(let i = n; i < arr.length; i++) {
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum); 
  }
  return maxSum
    
}

module.exports = {maxSubarraySum};