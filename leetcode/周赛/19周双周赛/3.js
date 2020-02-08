/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
  let t1, t2, ans
  if (hour >= 12) {
    t1 = hour - 12
  } else {
    t1 = hour
  }
  t2 = minutes * 6
  t1 = t1 * 30 + minutes * 0.5
  ans = Math.abs(t1 - t2)
  return ans > 180 ? 360 - ans : ans
}

console.log(angleClock(12,5))
