
function diagonal(length, arr) {
 let diagonalCoordinates = [];
length = 5
 // TODO this is O(n^2), should be improved

  for (var j = 0; j < length; j++) {
    let forward = [];
    let reverse = [];
    let forwardRemainder = [];
    let backwardRemainder = [];
    for (var i = 0; i < length; i++) {
      let x = i + j;

    if (x  < length) {
    // forward diagonals starting with index of last element in the first array
     forward.push([i,x]);
     // reverse diagonals starting with index of last element of first array
     reverse.push([i, length - x - 1])
    }
   
    
    if ((x + 1) < length )  {
      // compute forward remainder diagonals starting with first index of second array
      forwardRemainder.push([ x + 1, i]);
      // compute reverse remainder of diagonals starting with of last index of second array
      backwardRemainder.push([length - (x + 1), (length - 1) - i])
    }
    }
    
  //remove empty arrays
  diagonalCoordinates.push(...[forward, reverse, forwardRemainder, backwardRemainder]);
  }
  
  return diagonalCoordinates.filter( arr => arr.length > 0)
}







module.exports = { diagonal };