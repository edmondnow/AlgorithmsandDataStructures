
// given a sorted array of integers, write a function that returns the index of the value passed to the function or return - 1

// Solve the problem
// read out and restate
// inputs: sorted integer, search value
// outputs: index of search value

//Examples

//search([1,2,3,4,5,6,7], 4) //3
//search([1, 2, 3], 3) //2
//search([2,3,4,5], 11) // -1

function search(arr, v) {
// decide which half is the number located in
  let pos = Math.ceil(arr.length / 2);
  let finalPos = pos;

  
  while(arr.length > 1) {
    if (arr[pos] === v) return finalPos;
    console.log(pos)
    if (arr[pos] <= v ) {
      arr = arr.slice(pos) 
      pos = Math.ceil(arr.length / 2);
      finalPos = pos + finalPos
      } else {
      arr = arr.slice(0, pos)
      pos = Math.ceil(arr.length / 2);
      finalPos = finalPos - pos
    
 
  }

  }
  return -1;
}

module.exports = {search}