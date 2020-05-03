/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  const final = []
  for(let i = 0;i<paths.length;i++) {
    final.push(paths[i][1])
  }
  for(let i = 0;i<paths.length;i++){
    for(let j = 0;j<final.length;j++) {
      if(final[j] === paths[i][0]) {
        final.splice(j,1)
      }
    }
  }
  return final.join('')
  // console.log(final.join(''));
}

// destCity([["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]])
// destCity([["B","C"],["D","B"],["C","A"]])
// destCity([["A","Z"]])



