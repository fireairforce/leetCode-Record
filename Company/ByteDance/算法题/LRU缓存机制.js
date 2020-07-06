var LRUCache = function(capacity) {
  this.cache = {};
  this.capacity = capacity;
  this.size = 0;
  this.queue = [];
};

LRUCache.prototype.get = function(key) {
  const hit = this.cache[key];
  if (hit !== undefined) {
    // 更新一下这个 key 在队列里面的位置
    this.queue = this.queue.filter(q => q !== key);
    this.queue.push(key);
    return hit;
  }
  return -1;
};

LRUCache.prototype.put = function(key, value) {
  const hit = this.cache[key];
  this.cache[key] = value;

  if (!hit) {
    if (this.size === this.capacity) {
      const key = this.queue.shift();
      this.cache[key] = undefined;
    } else {
      this.size += 1;
    }
    this.queue.push(key);
  } else {
    // 如果这个值已经有了，就把它删掉再更新一下就可以了
    this.queue = this.queue.filter(q => q !== key);
    this.queue.push(key);
  }
};
