// get a sorted array with positive and negative values and count the unique values of the arra using multiple points


//countUnique([-1,1]) // 2
//countUnique([-4,-4,-1,0,1,2,3,4,5,6]); // 9


function countUnique(arr) {
 let l = 0;
 let r = arr.length - 1;
 let count = 0;

 while(l < r) {
   if (arr[l] !== arr[l + 1]) count++
   if (arr[r] !== arr[r - 1]) count++
   l++;
   r--;
 }
  
  return count;
}

module.exports = {countUnique}

