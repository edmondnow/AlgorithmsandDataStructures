const swap = (arr, idx1, idx2) => {
		[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}



function bubbleSortNoOptimization(arr) {
	for (let i = arr.length; i >= 0; i--){
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) swap(arr, j, j + 1);
		} 
	} 
	return arr;
}

// Bubble sort optimization: when data is almost sorted our algorithm  will go through the end of it
// Check last time through whether we swapped our code.
function bubbleSort(arr) {
let noSwaps;
	for (let i = arr.length; i >= 0; i--){
		let noSwaps = true;
		for (let j = 0; j < arr.length; j++) {

			if (arr[j] > arr[j + 1]) {
						swap(arr, j, j + 1);
						noSwaps = false;
			}
		} 
		if(noSwaps) break;
	} 
	return arr;
}


module.exports = {bubbleSort};