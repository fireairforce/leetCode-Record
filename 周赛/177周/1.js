/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  var date1Str = date1.split('-')
  var date1Obj = new Date(date1Str[0], date1Str[1] - 1, date1Str[2])
  var date2Str = date2.split('-')
  var date2Obj = new Date(date2Str[0], date2Str[1] - 1, date2Str[2])
  var t1 = date1Obj.getTime()
  var t2 = date2Obj.getTime()
  var dateTime = 1000 * 60 * 60 * 24
  var minusDays = Math.floor((t2 - t1) / dateTime)
  var days = Math.abs(minusDays)
  return days
}
