/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  let sum = 0
  t1 = s.split('')
  t2 = s.split('')
  let l = 0,
    r = s.length - 1
  if (judge(s)) {
    sum++
  } else {
    return 0
  }
  while (l <= r && s.length >= 3) {
    if (judge(t1.slice(1))) {
      sum++
      l++
      t1 = t1.slice(1)
      continue
    }
    break
  }
  l = 0
  r = s.length - 1
  while (l <= r && s.length >= 3) {
    if (judge(t2.slice(0, s.length - 1))) {
      sum++
      r--
      t2 = t2.slice(0, s.length - 1)
      continue
    }
    break
  }
  t1 = s.split('')
  t2 = s.split('')
  while (l <= r && s.length >= 3) {
    if (judge(t1.slice(1)) && judge(t2.slice(0, s.length - 1))) {
      sum ++
      l++
      r--
      t1 = t1.slice(1)
      t2 = t2.slice(0, s.length - 1)
    } else {
      break
    }
  }
  return sum
}

const judge = (s) => {
  if (s.indexOf('a') !== -1 && s.indexOf('b') !== -1 && s.indexOf('c') !== -1) {
    return true
  }
  return false
}

// console.log(numberOfSubstrings("b caba c"))