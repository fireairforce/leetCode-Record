/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

var exist = function(board, word) {
  if (board.length === 0 || word.length === 0) {
    return false;
  }
  let m = board.length;
  let n = board[0].length;
  if (n * m < word.length) {
    return false;
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, m, n, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
};

const dfs = (board, m, n, x, y, word, pos) => {
  if (x < 0 || x >= m || y < 0 || y >= n) {
    return false;
  }
  if (word[pos] !== board[x][y]) {
    return false;
  }
  if (pos + 1 === word.length) {
    return true;
  }
  board[x][y] = null;
  const res =
    dfs(board, m, n, x + 1, y, word, pos + 1) ||
    dfs(board, m, n, x - 1, y, word, pos + 1) ||
    dfs(board, m, n, x, y + 1, word, pos + 1) ||
    dfs(board, m, n, x, y - 1, word, pos + 1);
    // 一波回溯回过去
  board[x][y] = word[pos];
  return res;
};
