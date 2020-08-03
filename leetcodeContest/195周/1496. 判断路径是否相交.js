/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const judgeCycle = (hashMap) => {
    if (hashMap.has('N') && hashMap.has('S')) {
      if (hashMap.get('N') === hashMap.get('S')) {
        if (hashMap.get('E') === hashMap.get('W')) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    } else if (hashMap.get('E') && hashMap.get('W')) {
      if (hashMap.get('E') === hashMap.get('W')) {
        if (hashMap.get('N') === hashMap.get('S')) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
    return false;
  }
  const map = new Map()
  let len = path.length
  if (path.includes('NS') || path.includes('SN') || path.includes('EW') || path.includes('WE')) {
    return true;
  }
  path = path.split('')
  for (let i = 0; i < len; i++) {
    map.set(path[i], map.has(path[i]) ? map.get(path[i]) + 1 : 1)
    if (judgeCycle(map)) {
      return true;
    }
  }
  return false;
}

// console.log(isPathCrossing("NNSWWEWSSESSWENNW"));