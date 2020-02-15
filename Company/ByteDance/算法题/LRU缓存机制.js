/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cache = {};
  this.capacity = capacity;
  this.size = 0;
  this.queue = [];
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  const hit = this.cache[key];
  if (hit !== undefined) {
    this.queue = this.queue.filter(q => q !== key);
    this.queue.push(key);
    return hit;
  }
  return -1;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  const hit = this.cache[key];
  this.cache[key] = value;

  if (!hit) {
    if (this.size === this.capacity) {
      const key = this.queue.shift();
      this.cache[key] = undefined;
    } else {
      this.size = this.size + 1;
    }
    this.queue.push(key);
  } else {
    this.queue = this.queue.filter(q => q !== key);
    this.queue.push(key);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
