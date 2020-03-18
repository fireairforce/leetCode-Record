/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
  let A = rec1[0]
  let B = rec1[1]
  let C = rec1[2]
  let D = rec1[3]
  let E = rec2[0]
  let F = rec2[1]
  let G = rec2[2]
  let H = rec2[3]
  let x1 = Math.max(A, E)
  let y1 = Math.max(B, F)
  let x2 = Math.min(C, G)
  let y2 = Math.min(D, H)
  if (x2 - x1 > 0 && y2 - y1 > 0) {
    return true
  }
  return false;
};

// console.log(isRectangleOverlap([0,0,2,2],[1,1,3,3]))
// console.log(isRectangleOverlap([0,0,1,1],[1,0,2,1]))
