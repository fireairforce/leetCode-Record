/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.origin = [...nums];
  this.current = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.current = [...this.origin];
  return this.current;
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const res = [];
  while (res.length < this.origin.length) {
    const i = getRandomInt(this.current.length);
    const num = this.current.splice(i, 1);
    res.push(num[0]);
  }
  this.current = res;
  return this.current;
};

const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */
