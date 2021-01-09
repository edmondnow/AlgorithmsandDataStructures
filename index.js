const { charCount } = require('./problemSolvingApproach.js');
const { same } = require('./frequencyCounter.js');
const {validAnagram} = require('./anagramFreqCounter');
const { sumZero } = require('./multiplePointers');
const {countUnique  } = require("./countUniqueValuesMP");
const {maxSubarraySum} = require('./slidingWindows.js');

const {search} = require('./divideConquer.js');

//search([1,2,3,4,5,6,7], 4) //3
search([1, 2, 3], 3) //2
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