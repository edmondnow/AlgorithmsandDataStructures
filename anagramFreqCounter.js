// Given two strings, write a function to determine if the second string is an anagram of the first. Anagrams are words formed from rearranging the letters of another words 

// Restate: check if one word contains the letters of  the others
// receives two strings
// outputs boolean
// yes
// 

function validAnagram2(str1, str2) {
  if(str1.length !== str2.length) return false
  return str1.split("").sort().join("") === str2.split("").sort().join("");
}

function validAnagram(str1, str2) {
  if(str1.length !== str2.length) return false
  
  let obj1 = {}
  let obj2 = {}

  str1.split("").sort().forEach(c => {
    obj1[c] ? obj1[c]++ : obj1[c] = 1
  });

  str2.split("").sort().forEach(c => {
    obj2[c] ? obj2[c]++ : obj2[c] = 1
  });
  console.log(obj1, obj2)
  return JSON.stringify(obj1) === JSON.stringify(obj2);
}

//validAnagram("","") //true
//validAnagram("zza","aaz") //false
//validAnagram("anagram", "nagaram") //true

module.exports = {validAnagram};