/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function(releaseTimes, keysPressed) {
  keysPressed = keysPressed.split('');
  let len = keysPressed.length;
  let a = [];
  a[0] = releaseTimes[0];
  for (let i = 1;i<len;i++) {
    a[i] = releaseTimes[i] - releaseTimes[i-1];
  }
  let obj = {};
  for (let i = 0;i<len;i++) {
    if (obj[keysPressed[i]]) {
      if (a[i] > obj[keysPressed[i]]) {
        obj[keysPressed[i]] = a[i];
      }
      continue;
    }
    obj[keysPressed[i]] = a[i];
  }
  console.log(obj);
  let arr = Object.keys(obj).sort((a, b) => {
    if (obj[a] === obj[b]) {
      return a.charCodeAt() - b.charCodeAt();
    }
    return obj[a] - obj[b];
  });
  // console.log(arr);
  return arr.pop();
};

// console.log(slowestKey([9, 29, 49, 50], "cbcd"));
// console.log(slowestKey([12,23,36,46,62], "spuda"));