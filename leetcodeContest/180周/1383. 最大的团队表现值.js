/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */
var maxPerformance = function(n, speed, efficiency, k) {
  const mod = 1e9 + 7
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push([speed[i], efficiency[i]])
  }
  // 按照效率降序排列
  arr.sort((a, b) => b[1] - a[1])
  let minHeap = new MinHead()
  let speedSum = 0
  let minEfficiency
  let res = 0
  for (let i = 0; i < n; i++) {
    minEfficiency = arr[i][1]
    speedSum = BigInt(speedSum) + BigInt(arr[i][0])
    minHeap.insert(BigInt(arr[i][0]))
    if (minHeap.size() > k) {
      speedSum -= minHeap.delete()
    }
    let temp = BigInt(minEfficiency) * BigInt(speedSum)
    res = temp > res ? temp : res
  }
  return res % mod
}

// 最小堆
function MinHead() {
  this.head = [-Infinity]
}

MinHead.prototype.insert = function(x) {
  this.head.length++
  let child = this.head.length - 1
  let parent = parseInt(child / 2)
  while (this.head[parent] > x) {
    this.head[child] = this.head[parent]
    child = parent
    parent = parseInt(child / 2)
  }
  this.head[child] = x
}

MinHead.prototype.size = function() {
  return this.head.length - 1
}

MinHead.prototype.delete = function() {
  let size = this.size()
  if (size <= 0) {
    return
  }
  let res = this.head[1]
  let item = this.head[size]
  this.head.length--
  size--
  let parent, child
  for (parent = 1; parent * 2 <= size; parent = child) {
    child = parent * 2
    if (child + 1 <= size && this.head[child + 1] < this.head[child]) {
      child++
    }
    if (item < this.head[child]) {
      break
    }
    this.head[parent] = item
    return res
  }
}