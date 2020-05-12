/**
 * Initialize your data structure here.
 */
var RandomizedSet = function() {
  this.map = new Map()
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
  if(this.map.has(val)) {
      return false
  } else {
      this.map.set(val, 1)
      return true
  }
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
  if(this.map.has(val)) {
      this.map.delete(val)
      return true;
  } else {
      return false;
  }
};

/**
 * Get a random element from the set.
 * @return {number}
 */
// test[Math.floor(Math.random()*test.length)])
RandomizedSet.prototype.getRandom = function() {
  let arr = Array.from(this.map.keys())
  return arr[Math.floor(Math.random()*arr.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */