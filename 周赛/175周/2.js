/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */

const isObj = (a1, a2) => {
  let a1Props = Object.getOwnPropertyNames(a1)
  let a2Props = Object.getOwnPropertyNames(a2)
  if (a1Props.length !== a2Props.length) {
    return false
  }
  for (let i = 0; i < a1Props.length; i++) {
    let propName = a1Props[i]
    if (a1[propName] !== a2[propName]) {
      return false
    }
  }
  return true
}
// t变成s异位词最小步骤
var minSteps = function(s, t) {
  let hashS = {}
  let hashT = {}
  for (let i = 0; i < t.length; i++) {
    if (!hashT[t[i]]) {
      hashT[t[i]] = 1
    } else {
      hashT[t[i]]++
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (!hashS[s[i]]) {
      hashS[s[i]] = 1
    } else {
      hashS[s[i]]++
    }
  }
  if (isObj(hashS, hashT)) {
    return 0
  } else {
    for (let key in hashS) {
      while (hashT[key] && hashS[key]) {
        hashS[key]--
        hashT[key]--
      }
    }
  }
  let sum = 0
  for (let key in hashS) {
    if (hashS[key]) {
      sum += hashS[key]
    }
  }
  return sum
}

// console.log(minSteps('bab', 'aba'))
// console.log(minSteps("anagram", "mangaar"));
