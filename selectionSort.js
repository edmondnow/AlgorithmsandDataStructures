

const swap = (arr, idx1, idx2) => {
		[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
}


function selectionSort(arr) {
	for (let i = 0; i < arr.length; i++) {
		let min = {i: i, v: arr[i]};

		for (let j = i; j < arr.length; j++) {
			if (min.v > arr[j]) min = {i: j, v: arr[j]};
		}

		if (min.v !== arr[i]) swap(arr, i, min.i);

	}

  return arr;
}


module.exports = {selectionSort};