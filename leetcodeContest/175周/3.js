var TweetCounts = function() {
  this.map = {}
}

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
  if (!Array.isArray(this.map[tweetName])) this.map[tweetName] = new Array()
  this.map[tweetName].push(time)
}

/**
 * @param {string} freq
 * @param {string} tweetName
 * @param {number} startTime
 * @param {number} endTime
 * @return {number[]}
 */
TweetCounts.prototype.getTweetCountsPerFrequency = function(
  freq,
  tweetName,
  startTime,
  endTime,
) {
  var len = this.map[tweetName].length
  var freqnum = 0
  var result = new Array()
  if (freq == 'minute') freqnum = 60
  else if (freq == 'hour') freqnum = 3600
  else freqnum = 60 * 60 * 24
  for (var i = 0; i < len; i++) {
    if (
      this.map[tweetName][i] >= startTime &&
      this.map[tweetName][i] <= endTime
    ) {
      var time = Math.floor((this.map[tweetName][i] - startTime) / freqnum)
      result[time] = result[time] == undefined ? 1 : result[time] + 1
    }
  }
  var regionLen = Math.ceil((endTime - startTime + 1) / freqnum)
  for (var i = 0; i < regionLen; i++) {
    if (result[i] == undefined) result[i] = 0
  }
  return result
}
