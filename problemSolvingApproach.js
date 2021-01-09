// Write a f which takes a string and returns counts of each charachter in the string

// Breakdown
// inputs : a string
// output: key value pairs where key is letter and value is count of letter
// outputs can be determined from inputs
// Steps
// declare empty object
// loop over string
// for each item in the array, if letter is not present in object, add key value pair { letter: 1}
// if letter is already present as a key in object, then increment value of respective key
// Pitfall this mutates the object that holds the output


 function charCount(string) {
  let  obj = {};
  string.split("").forEach(c => {

    if(obj.hasOwnProperty(c)) {
      obj[c]++
    } else {
      obj[c] = 1
    }
  })

  return obj;
}

module.exports = {charCount}

// charCount("hello");

 