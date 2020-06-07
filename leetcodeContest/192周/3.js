/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
  this.arr = [homepage]
  // 前进
  this.front = 0
  // 后退
  this.end = 0;
  // 记录指针
  this.index = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
  this.arr = this.arr.slice(0, this.index + 1)
  this.arr.push(url)
  this.front = 0;
  this.end ++;
  this.index ++;
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
  if (this.end === 0) {
    return this.arr[this.index];
  }
  if (steps <= this.end) {
    this.end -= steps;
    this.index -= steps;
    this.front += steps;
  } else {
    this.front += this.end;
    this.index -= this.end;
    this.end = 0;
  }
  return this.arr[this.index]
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
  if (this.front === 0) {
    return this.arr[this.index];
  }
  if (steps <= this.front) {
    this.end += steps;
    this.index += steps;
    this.front -= steps
  } else {
    this.end += this.front;
    this.index += this.front;
    this.front = 0
  }
  return this.arr[this.index]
};


// var obj = new BrowserHistory('lc')
// obj.visit('gg')
// obj.visit('fb')
// obj.visit('yb')
// console.log(obj.back(1));
// console.log(obj.back(1));
// console.log(obj.forward(1));
// obj.visit('lk')
// console.log(obj.forward(2));
// console.log(obj.back(2));
// console.log(obj.back(2));
