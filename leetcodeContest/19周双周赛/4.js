/**
 * @param {number[]} arr
 * @return {number}
 */
var minJumps = function(arr) {
  if (arr.length === 1 || arr.length === 2) {
    return 0
  }
  let hash = {}
  let hashB = {}
  let min = 999999
  let res = []
  const dfs = (index, arr, count, hash, res, hashB) => {
    if (index === arr.length - 1) {
      if (count < min) {
        min = JSON.parse(JSON.stringify(count))
        res.push(count)
      }
      return
    }
    for (let i = 0; i < arr.length; i++) {
      if (
        i !== index &&
        arr[i] === arr[index] &&
        !hash[index] &&
        !hashB[arr[index]]
      ) {
        hash[index] = 1
        hashB[arr[index]] = 1
        dfs(i, arr, count + 1, hash, res, hashB)
        hashB[arr[index]] = 0
        hash[index] = 0
      }
    }
    if (index > 0 && !hash[index]) {
      hash[index] = 1
      hashB[arr[index]] = 1
      dfs(index - 1, arr, count + 1, hash, res, hashB)
      hashB[arr[index]] = 0
      hash[index] = 0
    }
    if (index < arr.length && !hash[index]) {
      hash[index] = 1
      hashB[arr[index]] = 1
      dfs(index + 1, arr, count + 1, hash, res, hashB)
      hashB[arr[index]] = 0
      hash[index] = 0
    }
    return
  }
  dfs(0, arr, 0, hash, res, hashB)
  res.sort((a, b) => a - b)
  return res[0]
}

