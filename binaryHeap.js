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
      if(index - 1 < 0) break;
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


       leftChildIndex = (2 * parentIndex) + 1
       rightChildIndex =  (2 * parentIndex) + 2
       leftChild = values[leftChildIndex];
       rightChild = values [rightChildIndex];
       parent = values[parentIndex];
    
    }
    return root; 
}



}


class Node {
  constructor(val, prio) {
      this.val = val;
      this.prio = prio
  }

}

class PriorityQueue {
	constructor() {
		this.values = [];
	}

swap = (idx1, idx2, arr) => {
		[arr[idx1],arr[idx2]] = [arr[idx2], arr[idx1]];
    return idx1
}

  push  = (val, prio) => {
    const node = new Node(val, prio)
    this.values.push(node)
  }
	
	enqueue = (val, prio) => {
    this.push(val, prio)
    if (this.values.length < 2) return this.values;
		let { values } = this;
		let index = values.length - 1;
		let parentIndex = Math.floor((index - 1) / 2);
		while(values[index].prio < values[parentIndex].prio) {
     
			this.swap(parentIndex, index, values);
			index = parentIndex
     
      if(index > 0) {     
			  parentIndex = Math.floor((index - 1) / 2);
      }
		} 
  
   return this.values; 
	}





   dequeue = () => {
    let { values }  = this; 
    let lastIndex = values.length - 1;
    this.swap(0, lastIndex, values)
    let root = values.pop(); 
    
    let parentIndex = 0;
    let leftChildIndex = (2 * parentIndex) + 1
    let rightChildIndex =  (2 * parentIndex) + 2
    let leftChild = values[leftChildIndex] ? values[leftChildIndex].prio : undefined  ;
    let rightChild = values[rightChildIndex] ? values[rightChildIndex].prio : undefined  
    let parent = values[parentIndex].prio;
    
    while(parent > leftChild || parent > rightChild) {
    console.log(">>")
      if (leftChild < parent && rightChild < parent) {
        parentIndex = leftChild > rightChild ? this.swap(leftChildindex, parentIndex, values) : this.swap(rightChildIndex, parentIndex, values);
    
      } else {

        if (leftChild < parent) {
          parentIndex = this.swap(leftChildindex, parentIndex, values); 
        
        }
        
        if (rigthChild < parent) {
        parentIndex = this.swap(rightChildIndex, parentIndex, values);
        }
    

      }
      
       leftChildIndex = (2 * parentIndex) + 1
       rightChildIndex =  (2 * parentIndex) + 2;
       
       leftChild = values[leftChildIndex] ? values[leftChildIndex].prio : undefined  ;
       rightChild = values[rightChildIndex] ? values[rightChildIndex].prio : undefined  
       parent = values[parentIndex].prio;
    
    }

    return root; 
}



}

module.exports = { MaxBinaryHeap, PriorityQueue }