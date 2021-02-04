const { charCount } = require('./problemSolvingApproach.js');
const { same } = require('./frequencyCounter.js');
const {validAnagram} = require('./anagramFreqCounter');
const { sumZero } = require('./multiplePointers');
const {countUnique  } = require("./countUniqueValuesMP");
const {maxSubarraySum} = require('./slidingWindows.js');
const {search} = require('./divideConquer.js');
const {factorial} = require('./factorialRecursive.js');
const {fib} = require("./recursiveFib.js");
const {bubbleSort} = require("./bubbleSort.js");
const {selectionSort} = require("./selectionSort.js");
const { insertionSort } = require("./insertionSort.js");
const { mergeSort } = require('./mergeSort.js');
const { quickSort } = require('./quickSort.js');
const { diagonal } = require('./diagonal.js')
const { radixSort } = require("./radixSort.js");
const { BinarySearchTree } = require("./tree.js");
const { MaxBinaryHeap, PriorityQueue }  = require("./binaryHeap.js")
const { HashTable } = require("./hashTable.js");
const { Graph } = require("./graph.js")


let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
g.BFS("A")


//let ht = new HashTable(17);
//ht.set("maroon","#800000")
//ht.set("yellow","#FFFF00")
//ht.set("olive","#808000")
//ht.set("salmon","#FA8072")
//ht.set("lightcoral","#F08080")
//ht.set("mediumvioletred","#C71585")
//ht.set("plum","#DDA0DD")
//ht.keys();



//let maxBinaryHeap = new MaxBinaryHeap();
//maxBinaryHeap.push(55);
//maxBinaryHeap.bubbleUp();
//maxBinaryHeap.extractMax();

//let prioQue = new PriorityQueue();
//prioQue.enqueue("lol2", 2)
//prioQue.enqueue("lol3", 5)
//prioQue.dequeue();
//prioQue.values;

//quickSort([3,1,2, 9, 8, 7, 6, 10, 0, 4]);

//diagonal(5)



//radixSort([15, 45, 2, 0, 93, 12, 46, 99, 1010])

//mergeSort([3,4,5, 0,1,2, 12, 9, 22, 11, 10, 13, 15])

 //fib(4) // 3
//fib(10) // 55
 //fib(28) // 317811
// fib(35) // 9227465
//insertionSort([2, 1, 3, 2, 14, 12, 10, 15, 5, 8, 6])

//factorial(6);
//search([1,2,3,4,5,6,7], 4) //3
//earch([1, 2, 3], 3) //2
//search([2,3,4,5], 11) // -1

//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2) //10
//maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4) // 17
//maxSubarraySum([], 4) //null


//countUnique([-1,1]) // 2
//countUnique([-4,-4,-1,0,1,2,3,4,5,6]); // 9
//sumZero([-3, 3]);
//charCount("hello")
//sumZero([-3, -2, -1, 0, 1, 2, 3])
//validAnagram("","") //true
//validAnagram("zaa","aaz") //false
//validAnagram("anagram", "nagaram") //true