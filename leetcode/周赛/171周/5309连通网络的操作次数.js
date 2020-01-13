/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
let father = [];
const init = (n) => {
  for (let i = 0; i < n; i++) {
    father[i] = i;
  }
};

const find = (x) => {
  while (x !== father[x]) {
    father[x] = father[father[x]];
    x = father[x];
  }
  return x;
};

const union = (x, y) => {
  let ux = find(x);
  let uy = find(y);
  if (ux === uy) {
    return 0;
  }
  father[ux] = uy;
  return 1;
};
var makeConnected = function(n, connections) {
  if (connections.length < n - 1) {
    return -1;
  }
  init(n);
  connections.map((item) => {
    union(item[0], item[1]);
  });
  let count = 0;
  for (let i = 0; i < n; i++) {
    // 找到一个联通分支
    if (find(i) === i) {
      count++;
    }
  }
  return count - 1;
};
