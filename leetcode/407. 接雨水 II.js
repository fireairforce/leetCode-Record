/**
 * @param {number[][]} heightMap
 * @return {number}
 */
var trapRainWater = function (heightMap) {
  const m = heightMap.length
  if (m < 3) {
    return 0
  }
  const n = heightMap[0].length
  let water_level = []
  // 初始化一下
  for (let i = 0; i < m; i++) {
    water_level[i] = []
    for (let j = 0; j < n; j++) {
      water_level[i][j] = Number.MAX_VALUE
    }
  }
  water_level[1][0] = 0
  water_level[1][n - 1] = 0
  for (let i = 2; i < m - 1; i++) {
    water_level.push(water_level[1])
  }
  let flowing = true;
  while (flowing) {
    
  }
}
