/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let hash = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (hash[board[i][j]] && board[i][j] !== ".") {
        return false;
      } else if (!hash[board[i][j]] && board[i][j] !== ".") {
        hash[board[i][j]] = 1;
      }
    }
    hash = {};
  }
  hash = {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (hash[board[j][i]] && board[j][i] !== ".") {
        return false;
      } else if (!hash[board[j][i]] && board[j][i] !== ".") {
        hash[board[j][i]] = 1;
      }
    }
    hash = {};
  }
  hash = {};
  for (let m = 0; m < 3; m++) {
    for (let n = 0; n < 3; n++) {
      for (let i = 3 * m; i < 3 * m + 3; i++) {
        for (let j = 3 * n; j < 3 * n + 3; j++) {
          if (hash[board[i][j]] && board[i][j] !== ".") {
            return false;
          } else if (!hash[board[i][j]] && board[i][j] !== ".") {
            hash[board[i][j]] = 1;
          }
        }
      }
      hash = {};
    }
  }
  return true;
};

isValidSudoku([
  ["5", "3", ".", ".", "7", ".", ".", ".", "."],
  ["6", ".", ".", "1", "9", "5", ".", ".", "."],
  [".", "9", "8", ".", ".", ".", ".", "6", "."],
  ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
  ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
  ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
  [".", "6", ".", ".", ".", ".", "2", "8", "."],
  [".", ".", ".", "4", "1", "9", ".", ".", "5"],
  [".", ".", ".", ".", "8", ".", ".", "7", "9"],
]);
