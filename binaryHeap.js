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


}

module.exports = {MaxBinaryHeap}