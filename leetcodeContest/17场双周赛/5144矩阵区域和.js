/**
 * @param {number[][]} mat
 * @param {number} K
 * @return {number[][]}
 */
var matrixBlockSum = function(mat, K) {
  let x = mat.length;
  let y = mat[0].length;
  let answer = [];
  for (let i = 0; i < x; i++) {
    answer[i] = new Array();
    for (let j = 0; j < y; j++) {
      answer[i][j] = 0;
    }
  }
  //   console.log(answer);
  for (let i = 0; i < x; i++) {
    for (let j = 0; j < y; j++) {
      let r1 = i - K;
      let r2 = i + K;
      let c1 = j - K;
      let c2 = j + K;
      //   console.log(r1,r2,c1,c2);
      for (let m = (r1 <= 0 ? 0 : r1); m <= (r2 >= x-1 ? x - 1 : r2); m++) {
        for (let n = (c1 <= 0 ? 0 : c1); n <= (c2 >= y-1 ? y - 1 : c2); n++) {
            // console.log(mat[m][n]);
            answer[i][j] += mat[m][n];
        }
      }
    }
  }
  return answer;
};

// console.log(
//   matrixBlockSum(
//     [[1,2,3],[4,5,6],[7,8,9]],
//     2,
//   ),
// );
