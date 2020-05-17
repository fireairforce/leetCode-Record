/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
  let len = startTime.length;
  let res = 0
  for (let i = 0;i<len;i++) {
    if(startTime[i]<=queryTime && endTime[i]>=queryTime) {
 res ++
    }
  }
  return res;
};