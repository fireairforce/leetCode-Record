/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number}
 */
var makeConnected = function(n, connections) {
  let m = connections.length;
  if (n > connections.length + 1) {
    return -1;
  }
  connections.sort((a,b)=>{
      if(a[0]===b[0]){
          return a[1] - b[1];
      }
      return a[0] - b[0];
  });
  console.log(connections);
  
};

console.log(makeConnected(10,[[0,4],[1,6],[2,9],[4,7],[0,6],[6,9],[4,8],[1,4],[4,9],[1,8],[2,8],[3,4],[0,9]]));