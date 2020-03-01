/**
 * @param {number[]} status
 * @param {number[]} candies
 * @param {number[][]} keys
 * @param {number[][]} containedBoxes
 * @param {number[]} initialBoxes
 * @return {number}
 */
var maxCandies = function(status, candies, keys, containedBoxes, initialBoxes) {
  const queue = initialBoxes;
  const closedBoxes = new Array(1000).fill(0);
  let unusedkeys = [];
  let ret = 0;
  for (let i = 0; i < queue.length; i++) {
    let cur = queue[i];
    ret += candies[cur];
    for (let box of containedBoxes[cur]) {
      status[box] === 1 ? queue.push(box) : (closedBoxes[box] = 1);
    }
    unusedkeys = unusedkeys.concat(keys[cur]).filter((key) => {
      if (closedBoxes[key] === 0) {
        return true;
      }
      closedBoxes[key] = 0;
      queue.push(key);
    });
  }
  return ret;
};
