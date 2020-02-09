var TweetCounts = function() {
  this.hash = []
}

/**
 * @param {string} tweetName
 * @param {number} time
 * @return {void}
 */
TweetCounts.prototype.recordTweet = function(tweetName, time) {
  this.tweetName = tweetName
  this.time = time
  this.obj = {}
  this.obj[this.tweetName] = this.time
  this.hash.push(this.obj)
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
  console.log(freq, tweetName, startTime, endTime)
  this.result = []
  this.sum = 0
  let timeflag = 0
  if (freq === 'minute') {
    timeflag = 60
  } else if (freq === 'hour') {
    timeflag = 3600
  } else if (freq === 'day') {
    timeflag = 3600 * 24
  }
  let userName = tweetName
  let delta = 0

  while (startTime + timeflag * delta <= endTime) {
    let begin = startTime + timeflag * delta
    let end = startTime + timeflag * (delta + 1)
    for (let i = 0; i < this.hash.length; i++) {
      for (let key in this.hash[i]) {
        if (key === userName) {
          //    判断时间是否在间隔里面
          if (begin <= this.hash[i][key] && this.hash[i][key] < end) {
            this.sum++
          }
        }
      }
    }
    if (this.sum) {
      this.result.push(this.sum)
    }
    delta++
    this.sum = 0
  }
  return this.result
}

let tt = new TweetCounts()
tt.recordTweet('wd', 0)
tt.recordTweet('wd', 60)
tt.recordTweet('wd', 10)
console.log(tt.getTweetCountsPerFrequency('minute', 'wd', 0, 59))
console.log(tt.getTweetCountsPerFrequency('minute', 'wd', 0, 60))
tt.recordTweet('wd', 120)
console.log(tt.getTweetCountsPerFrequency('hour', 'wd', 0, 210))

/**
 * Your TweetCounts object will be instantiated and called as such:
 * var obj = new TweetCounts()
 * obj.recordTweet(tweetName,time)
 * var param_2 = obj.getTweetCountsPerFrequency(freq,tweetName,startTime,endTime)
 */

// ["TweetCounts","recordTweet","recordTweet","recordTweet","getTweetCountsPerFrequency","getTweetCountsPerFrequency","recordTweet","getTweetCountsPerFrequency"]
// [[],["tweet3",0],["tweet3",60],["tweet3",10],["minute","tweet3",0,59],["minute","tweet3",0,60],["tweet3",120],["hour","tweet3",0,210]]
