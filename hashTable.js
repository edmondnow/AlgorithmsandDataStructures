class HashTable {
	constructor(size=53) {
		this.keyMap = new Array(size);
	}
	
 _hash(key) {
		let total = 0;
		let WEIRD_PRIME = 31;
		for (let i = 0; i < Math.min(key.length, 100); i++) {
				let char = key[i];
				let value = char.charCodeAt(0) - 96;
				total = (total * WEIRD_PRIME + value) % this.keyMap.length
		}
		return total;
	}

	set(key,val) {
    let index = this._hash(key);
    if(!this.keyMap[index]){
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, val]);
	}
	
	get(key) {
		let index = this._hash(key);
		let sideChain = this.keyMap[index];
		if (!sideChain) return undefined;
		let el = sideChain.find(([k, v]) => k === key);
    return el ? el[1] : undefined
    	}

	keys() {
	 return this.keyMap.flat(2).filter((val, i) => i % 2 === 0)
	}

	values() {
	 return this.keyMap.flat(2).filter((val, i) => i % 2 !== 0)
	}
	
	
}



module.exports = {HashTable}