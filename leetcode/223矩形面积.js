/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
  let x1 = Math.abs(A - C);
  let y1 = Math.abs(B - D);
  let S1 = x1 * y1;
  let x2 = Math.abs(G - E);
  let y2 = Math.abs(H - F);
  let S2 = x2 * y2;
  // 判断相交
  let x3 = A > E ? A : E;
  let y3 = B > F ? B : F;
  let x4 = C < G ? C : G;
  let y4 = D < H ? D : H;
  let S3 = (x4 - x3) * (y4 - y3);
  if (x4 - x3 > 0 && y4 - y3 > 0) {
    return S2 + S1 - S3;
  }
  return S1 + S2;
};

// console.log(computeArea(-2, -2, 2, 2, -2, -2, 2, 2));
