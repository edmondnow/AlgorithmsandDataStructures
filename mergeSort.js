function merge(arr1, arr2) {
	let result = [];

 
	let helper = (i1, i2) => {
		
		if(arr1[i1] < arr2[i2]) {
			result.push(arr1[i1])
			i1++;
		} else {
      result.push(arr2[i2]) 
      i2++;
    }
		

  if(!arr1[i1]) {
			arr2.slice(i2).forEach(el => result.push(el));
			return result;
	} 
  
		if(!arr2[i2]) {
			arr1.slice(i1).forEach(el => result.push(el));
			return result;
		} 
	
		
		helper(i1, i2)
	}
	
	helper(0, 0);

return result
	
}


function mergeSort(arr) {
	let broken = []
	arr.forEach(el => broken.push([el]));
 
	let brokenMerge = function(broken) {
    if (broken.length === 1) return;
		broken.push(merge(broken[0], broken[1]));
	
		broken.shift();
		broken.shift();
    
    brokenMerge(broken);
	}
	
	brokenMerge(broken);
  return broken[0]
}

module.exports = { mergeSort}