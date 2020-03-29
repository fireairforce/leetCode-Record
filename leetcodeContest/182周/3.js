var UndergroundSystem = function() {
  this.hash1 = {}
  this.hash2 = {}
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
  if (!this.hash1[stationName]) {
    this.hash1[stationName] = []
    this.hash1[stationName].push(`${id}-${t}`)
  } else {
    this.hash1[stationName].push(`${id}-${t}`)
  }
}

/**
 * @param {number} id
 * @param {string} stationName
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
  if (!this.hash2[stationName]) {
    this.hash2[stationName] = []
    this.hash2[stationName].push(`${id}-${t}`)
  } else {
    this.hash2[stationName].push(`${id}-${t}`)
  }
}

/**
 * @param {string} startStation
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(
  startStation,
  endStation,
) {
  let res = []
  for (let i = 0; i < this.hash1[startStation].length; i++) {
    for (let j = 0; j < this.hash2[endStation].length; j++) {
      let item1 = this.hash1[startStation][i].split('-')
      let item2 = this.hash2[endStation][j].split('-')
      if (item1[0] === item2[0]) {
        res.push(parseInt(item2[1]) - parseInt(item1[1]))
      }
    }
  }
  let count = 0
  for (let i = 0; i < res.length; i++) {
    count += res[i]
  }
  // console.log(count / res.length);
  return count / res.length
}

// let ditie = new UndergroundSystem()
// ditie.checkIn(45, "Leyton", 3)
// ditie.checkIn(32, "Paradise", 8);
// ditie.checkIn(27, "Leyton", 10);
// ditie.checkOut(45, "Waterloo", 15);
// ditie.checkOut(27, "Waterloo", 20);
// ditie.checkOut(32, "Cambridge", 22);
// ditie.getAverageTime("Paradise", "Cambridge");
// ditie.getAverageTime("Leyton", "Waterloo");
// ditie.checkIn(10, "Leyton", 24);
// ditie.getAverageTime("Leyton", "Waterloo");
// ditie.checkOut(10, "Waterloo", 38);
// ditie.getAverageTime("Leyton", "Waterloo");
