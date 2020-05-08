/**
 * @param {number} capacity
 */
var LFUCache = function (capacity) {
  this.size = capacity
  // 记录 key
  this.valueMap = new Map()
  // 记录使用的 key
  this.useMap = new Map()
}

/**
 * @param {number} key
 * @return {number}
 */
LFUCache.prototype.get = function (key) {
  // 如果 hash 表里面存在这个值
  if (this.valueMap.has(key)) {
    let use = this.useMap.get(key)
    let value = this.valueMap.get(key)
    this.valueMap.delete(key)
    this.useMap.set(key, use + 1)
    this.valueMap.set(key, value)
    return value
  } else {
    return -1
  }
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LFUCache.prototype.put = function (key, value) {
  if (this.size === 0) {
    return
  }
  let min = Math.min(...this.useMap.values())
  if (this.valueMap.has(key)) {
    this.valueMap.set(key, value)
    let use = this.useMap.get(key)
    this.useMap.set(key, use + 1)
  } else {
    this.valueMap.set(key, value)
    this.useMap.set(key, 1)
  }
  // 内存超出的时候
  if (this.valueMap.size > this.size) {
    // 缓存 key 遍历器
    let it = this.valueMap.keys()
    let delKey = it.next().value
    while (this.useMap.get(delKey) !== min) {
      delKey = it.next().value
    }
    this.useMap.delete(delKey)
    this.valueMap.delete(delKey)
  }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
