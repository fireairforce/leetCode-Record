/**
 * @param {number[][]} events
 * @return {number}
 */
var maxEvents = function(events) {
  if (events.length === 1) {
    return 1
  }
  events = events.sort((a, b) => {
    if (a[1] === b[1]) {
      return a[0] - b[0]
    }
    return a[1] - b[1]
  })
  let hash = {}
  for (let i = 0; i < events.length; i++) {
    for (let j = events[i][0]; j <= events[i][1]; j++) {
      if (!hash[j]) {
        hash[j] = 1
        break
      }
    }
  }
  return Object.keys(hash).length
}

// console.log(
//   maxEvents([[1,2],[2,3],[3,4],[1,2]]),
// )
