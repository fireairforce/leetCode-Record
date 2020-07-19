const maxArea = (grid) => {
  let rows = grid.length
  if (rows === 0) {
    return 0
  }
  let cols = grid[0].length
  let k = 2
  let nums = []
  for (let i = 0; i < rows; i++) {
    nums[i] = []
    for (let j = 0; j < cols; j++) {
      nums[i][j] = 0
    }
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      dfs(grid, i, j, rows, cols, k++, nums, grid[i][j])
    }
  }
  let a = {}
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (a[nums[i][j]] === undefined) {
        a[nums[i][j]] = 1
      } else {
        a[nums[i][j]] += 1;
      }
    }
  }
  let len = 0
  for (let item in a) {
    if (len < a[item] && item !== '0') {
      len = a[item]
    }
  }
  return len
}

const dfs = (grid, i, j, rows, cols, k, nums, key) => {
  if (
    i < 0 ||
    i > rows - 1 ||
    j < 0 ||
    j > cols - 1 ||
    grid[i][j] !== key ||
    grid[i][j] === -1
  ) {
    return
  }
  grid[i][j] = -1
  nums[i][j] = k
  dfs(grid, i + 1, j, rows, cols, k, nums, key)
  dfs(grid, i - 1, j, rows, cols, k, nums, key)
  dfs(grid, i, j + 1, rows, cols, k, nums, key)
  dfs(grid, i, j - 1, rows, cols, k, nums, key)
}

let lines = readline().split(' ')
let n = parseInt(lines[0])
let m = parseInt(lines[1])
let input = []
for (let i = 0;i<n;i++) {
  lines = readline().split("")
  for (let i = 0;i < lines.length;i++) {
    lines[i] = parseInt(lines[i])
  }
  input.push(lines)
}

print(maxArea(input))

// console.log(
//   maxArea([
//     [0, 0, 1, 1, 0],
//     [1, 1, 1, 0, 0],
//     [0, 1, 1, 0, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 1, 1],
//   ]),
// )
