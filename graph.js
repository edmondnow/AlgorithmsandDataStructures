class Graph {
	constructor() {
			this.adjencyList = {};
	}
	
  addVertex(vertex){
          if(!this.adjencyList[vertex]) this.adjencyList[vertex] = [];
      }

  addEdge(vertex1, vertex2) {
        this.adjencyList[vertex1].push(vertex2);
        this.adjencyList[vertex2].push(vertex1);
  }

	removeEdge(vertex1, vertex2) {
		this.adjencyList[vertex1] = this.adjencyList[vertex1].filter(v => v !== vertex2);
		this.adjencyList[vertex2] = this.adjencyList[vertex2].filter(v => v !== vertex1);

	}


	removeVertex(vertex) {
	
	while(this.adjencyList[vertex].length) {
		const adjecentVertex = this.adjencyList[vertex].pop();
		this.removeEdge(vertex, adjecentVertex);
	}
   delete this.adjencyList[vertex];
	
	}


  DFSrecursive(v) {
	  let result = [];
	  let visited = {};
    let list = this.adjencyList;
    function helper(v) {
      if(!v) return;
      visited[v] = true;
      result.push(v);
      list[v].forEach(adjecent =>  { 
        if (!visited[adjecent]) helper(adjecent)
      })
	  }

    helper(v);

    return result;
  }

  DFSiterative(v) {
    let result = [];
    let stack = [];
    let visited = {};
    const list = this.adjencyList
    stack.push(v);
    while(stack.length > 0) {
      const vert = stack.pop();
      if (!visited[vert]) {
          result.push(vert);
          visited[vert] = true;
          stack = [ ...stack, ...list[vert]]
        }
    }
      return result;
  }

  BFS(v) {
    let queue = [v];
    let result = [];
    let visited = { [v]: true };
    const list = this.adjencyList
  
    while(queue.length > 0) {
      let visiting = queue.pop();
      result.push(visiting);
      list[visiting].forEach(v => {
        if (!visited[v])  {
          visited[v] = true;
          queue.unshift(v);
        }
      });		
    }

  return  result;

}

}



module.exports = {Graph}