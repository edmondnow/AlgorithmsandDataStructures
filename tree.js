class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(value === current.value) return undefined;
            if(value < current.value){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return undefined;
        return current;
    }
    contains(value){
        if(this.root === null) return false;
        var current = this.root,
            found = false;
        while(current && !found){
            if(value < current.value){
                current = current.left;
            } else if(value > current.value){
                current = current.right;
            } else {
                return true;
            }
        }
        return false;
    }


  breathFirstTraversal() {
	let queue = [];
	let store = []; 

	queue.push(this.root);
	
	while(queue.length > 0) {
		const node = queue.pop()
		store.push(node.value);
		if(node.left) {
				queue.unshift(node.left);
		}

		if(node.right) {
			queue.unshift(node.right);
		}
	}
	
	return store;
}

dfsPreOrder() {
	let current = this.root;
	let store = []; 
	
	
	function helper(node) {
		
	
    	store.push(node.value);
      
		if (node.left) {
				helper(node.left)
		}
	
		if (node.right) {
				helper(node.right)
		}

	
  
  
	
	}


	
	helper(current);
	
	return store;
}



dfsPostOrder() {
	let current = this.root;
	let store = []; 
	
	
	function helper(node) {
		
	

		if (node.left) {
				helper(node.left)
		}
	
		if (node.right) {
				helper(node.right)
		}

		store.push(node.value);
  
  
	
	}


	
	helper(current);
	
	return store;
}



dfsInOrder() {
	let current = this.root;
	let store = []; 
	
	
	function helper(node) {
		
	

		if (node.left) {
				helper(node.left)
		}

    
		store.push(node.value);
	
		if (node.right) {
				helper(node.right)
		}

  
  
	
	}


	
	helper(current);
	
	return store;
}
}


//      10
//   5     13
// 2  7  11  16
var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
//tree.traversal();

module.exports = {BinarySearchTree};