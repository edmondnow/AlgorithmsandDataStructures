
const swap = (arr, idx1, idx2) => {
		  [arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}




function pivot(arr, startIndex = 0, endIndex =  arr.length - 1) {
	let pivot = arr[startIndex];
	let pivotIndex = startIndex;

  for (let i = startIndex; i <= endIndex; i++) {
    if(pivot > arr[i]) {
      pivotIndex++;
      swap(arr,pivotIndex, i)
    }
  }

   swap(arr, startIndex, pivotIndex);
  return pivotIndex;
}


function quickSort(arr, left = 0, right = arr.length -1){
    if(left < right){
        let pivotIndex = pivot(arr, left, right) //3
        //left
        quickSort(arr,left,pivotIndex-1);

        //right
        quickSort(arr,pivotIndex+1,right);
      }
     return arr;
} 



module.exports = {quickSort}