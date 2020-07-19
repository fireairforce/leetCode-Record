// lines = readline().split(' ')
// let n = parseInt(lines[0])
// let m = parseInt(lines[1])

// // array 存一下转发规则
// let rules = []
// // n 个转发规则
// for (let i = 0; i < n; i++) {
//   let lines1 = readline().split(' ')
//   lines1[0] = lines1[0] + '/'
//   rules.push(lines1)
// }

rules = [
  ['seller/user-list/', 'rbac-service'],
  ['sls/', 'sls-backend'],
  ['sls/loc/', 'locale-center'],
  ['smart/', 'smart-agent'],
]

testxx = ['smart/forecast/', 'sls/loc/create/', 'sls/location/import/']

let transfer = []
let res = []
// m 个待转发的 URL
for (let i = 0; i < 3; i++) {
  // lines2 = readline()
  let lines2 = testxx[i]
  let tempRes = []
  for (let j = 0; j < rules.length; j++) {
    // console.log('lines2: ', lines2);
    // console.log('rules[j][0]: ', rules[j][0]);
    // console.log(lines2.indexOf(rules[j][0]));
    if (lines2.indexOf(rules[j][0]) !== -1) {
      tempRes.push(rules[j])
    }
  }
  // console.log(tempRes);
  tempRes.sort((a, b) => b[0].length - a[0].length)
  res.push(tempRes[0][1])
}
// console.log(res);
for (let item of res) {
  print(item)
}
