function pivotHelper(arr) {
	let pivot = arr[0];



	arr.forEach((n,i, arr) => {
		if(n < pivot) {
			arr.splice(i,1);
			arr.unshift(n);
		}
	});
  
  return arr;

}


const swap = (arr, idx1, idx2) => {
		[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}



function pivotHelper2(arr) {
    let pivot = arr[0];
    let pivotIndex = 0  ;
 
    arr.forEach((n,i, arr) => {
        if(pivot > n) {

          pivotIndex++;
         swap(arr, pivotIndex, i)
          
        }
    })
    
    swap(arr, pivotIndex, 0)
    return arr;
}



module.exports = {quickSort: pivotHelper2}