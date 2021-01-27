class MaxBinaryHeap {
	constructor() {
		this.values = [41, 39, 18, 27, 12];
	}

  push = (val) => {
    this.values.push(val)
  }
	
	bubbleUp = () => {
		let { values } = this;
		let index = values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while(values[parentIndex] < values[index]) {
			[values[parentIndex], values[index]] = [values[index], values[parentIndex]];
			index = parentIndex
			parentIndex = Math.floor((index - 1) / 2);		
		} 
  
   return this.values; 
	}

  swap = (idx1, idx2, arr) => {
		[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    return idx1
}



   extractMax = () => {
    let { values }  = this;
    console.log(values);

    let lastIndex = values.length - 1;
    this.swap(0, lastIndex, values)
    let root = values.pop(); 
    
    let parentIndex = 0;
    let leftChildIndex = (2 * parentIndex) + 1
    let rightChildIndex =  (2 * parentIndex) + 2
    let leftChild = values[leftChildIndex];
    let rightChild = values [rightChildIndex];
    let parent = values[parentIndex];
    
    while(parent < leftChild || parent < rightChild) {
    
      if (leftChild > parent && rightChild > parent) {
        parentIndex = leftChild > rightChild ? this.swap(leftChildindex, parentIndex, values) : this.swap(rightChildIndex, parentIndex, values);
    
      } else {

        if (leftChild > parent) {
          parentIndex = this.swap(leftChildindex, parentIndex, values); 
        
        }
        
        if (rigthChild > parent) {
        parentIndex = this.swap(rightChildIndex, parentIndex, values);
        }
    

      }

      console.log(values)

       leftChildIndex = (2 * parentIndex) + 1
       rightChildIndex =  (2 * parentIndex) + 2
       leftChild = values[leftChildIndex];
       rightChild = values [rightChildIndex];
       parent = values[parentIndex];
    
    }
    return root; 
}



}

module.exports = { MaxBinaryHeap }