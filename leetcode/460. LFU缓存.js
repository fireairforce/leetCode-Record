/**
 * @param {number} capacity
 */
var LFUCache = function(capacity) {
  this.count = capacity;
  this.hashMap = {}
};

/** 
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function(key) {
  if(this.hashMap[key]) {
    return this.hashMap[key]
  } else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function(key, value) {
  if(this.hashMap[key]) {
    this.hashMap[key] = value
  } else {
    if(this.count > 0) {
      this.hashMap[key] = value
    }
  }
};

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */