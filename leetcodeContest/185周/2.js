/**
 * @param {string[][]} orders
 * @return {string[][]}
 */
var displayTable = function (orders) {
  if(orders = JSON.stringify())
  const table = Array(600)
    .fill(0)
    .map((item) => [])
  const cai = {}
  for (let i = 0; i < orders.length; i++) {
    let item = parseInt(orders[i][1])
    table[item].push(orders[i][2])
    if (!cai[orders[i][1]]) {
      cai[orders[i][2]] = 1
    } else {
      cai[orders[i][2]]++
    }
  }
  const caiming = Object.keys(cai).sort((a, b) => {
    if(a < b) {
      return -1
    } 
    if (a >b) {
      return 1
    }
    return 0
  })
  const res = []
  res[0] = ['Table', ...caiming]
  let index = 1
  for (let i = 0; i < 600; i++) {
    if (table[i].length !== 0) {
      res[index] = []
      res[index].push(String(i))
      for (let k = 1; k < res[0].length; k++) {
        res[index][k] = 0
        for (let j = 0; j < table[i].length; j++) {
          if (table[i][j] === res[0][k]) {
            res[index][k]++
          }
        }
      }
      index++
    }
  }
  for (let i = 0; i < res.length; i++) {
    for (let j = 0; j < res[0].length; j++) {
      res[i][j] = String(res[i][j])
    }
  }
  return res
}

// console.log(displayTable([["David","3","Ceviche"],["Corina","10","Beef Burrito"],["David","3","Fried Chicken"],["Carla","5","Water"],["Carla","5","Ceviche"],["Rous","3","Ceviche"]]));
// console.log(displayTable([["James","12","Fried Chicken"],["Ratesh","12","Fried Chicken"],["Amadeus","12","Fried Chicken"],["Adam","1","Canadian Waffles"],["Brianna","1","Canadian Waffles"]]))
// console.log(displayTable([["Laura","2","Bean Burrito"],["Jhon","2","Beef Burrito"],["Melissa","2","Soda"]]))
// console.log(
//   displayTable([
//     ['pKKgO', '1', 'qgGxK'],
//     ['ZgW', '3', 'XfuBe'],
//   ]),
// )

// console.log(
// displayTable([["ZmdDG","16","mrbRX"],["pt","1","mrbRX"],["Hl","5","qrzo"],["jRyk","12","mrbRX"],[" sPzn","8","ijzu"],["KHxC","11","JyY"],["Qqox","2","iA"],["aYWSw","11","ZHmJR"],["onh","5","tGvXE"]]),
// )
// [["ZmdDG","16","mrbRX"],["pt","1","mrbRX"],["Hl","5","qrzo"],["jRyk","12","mrbRX"],[" sPzn","8","ijzu"],["KHxC","11","JyY"],["Qqox","2","iA"],["aYWSw","11","ZHmJR"],["onh","5","tGvXE"]]

