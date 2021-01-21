function getDigit(num, idx) {
  num = Math.abs(num);
	let dig =  Number(num.toString().split("").reverse()[idx]);
  return isNaN(dig) ? 0 : dig;
}

function digitCount(num) {
	return num.toString().length;
}

function getLongest(arr) {
  let strings = [];
  arr.forEach(el => strings.push(digitCount(el)));
  strings.sort();
  return strings[arr.length - 1];

}

function createBucket(buckets) {
  if (buckets.length === 10) return buckets;
  buckets.push([]);
  return createBucket(buckets);
}

function radixSort(arr) {
  let longest = getLongest(arr);
	for (let i = 0; i < longest; i++) {
    var buckets = createBucket([]);
		arr.forEach(el => {
				const dig = getDigit(el, i);
				buckets[dig].push(el);
		})
	
    arr = buckets.flat();
  }
	return arr;
}


module.exports = { radixSort };