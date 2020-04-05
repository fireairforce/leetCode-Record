/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */
var longestDiverseString = function (a, b, c) {
  let res = ''
  while (a >= 1 || b >=1 || c >=1) {
    let max = Math.max(a, b, c)
    if (max >= 2) {
      if (a === max && a >= 2) {
        if (res[res.length - 1] !== 'a') {
          res += 'aa'
          a -= 2
        } else {
          if(b !== 0) {
               res += 'b'
               b--
               continue
          }
          if(c !== 0) {
              res += 'c'
              c--
              continue
          }
          if(b === 0 && c === 0) {
            break;
          }
        }
      } else if (b === max && b >= 2) {
        if (res[res.length - 1] !== 'b') {
          res += 'bb'
          b -= 2
        } else {
          if(a !== 0) {
              res += 'a'
              a--
              continue
          }
          if(c !== 0) {
              res += 'c'
              c--
              continue
          }
          if(a === 0 && c === 0) {
            break;
          }
        }
      } else if (c === max && c >= 2) {
        if (res[res.length - 1] !== 'c') {
          res += 'cc'
          c -= 2
        } else {
          if(a !== 0) {
              res += 'a'
              a--
              continue
          }
          if(b !== 0) {
              res += 'b'
              b--
              continue
         }
         if(b === 0 && a === 0) {
          break;
        }
        }
      }
    } else {
      if (a === max) {
        if(res[res.length - 1] !== 'a') {
          res += 'a'
          a--
        } else {
           if(b !== 0) {
             res += 'b'
             b --
            continue
           } 
           if(c !== 0) {
             res += 'c'
             c--
             continue
           }
           if(b === 0 && c === 0) {
             break;
           }
        }
      } else if (b === max) {
        if(res[res.length - 1] !== 'b') {
          res += 'b'
          b--
        } else {
          if(a !== 0) {
            res += 'a'
            a --
           continue
          } 
          if(c !== 0) {
            res += 'c'
            c--
            continue
          }
          if(a === 0 && c === 0) {
            break;
          }
        }
      } else if (c === max) {
        if(res[res.length - 1] !== 'c') {
          res += 'c'
          c--
        } else {
          if(a !== 0) {
            res += 'a'
            a --
           continue
          } 
          if(b !== 0) {
            res += 'b'
            b--
            continue
          }
          if(a === 0 && b === 0) {
            break;
          }
        }
      }
    }
  }
  return res
}

// console.log(longestDiverseString(1, 1, 7))
// console.log(longestDiverseString(2, 2, 1))
// console.log(longestDiverseString(7, 1, 0))
// console.log(longestDiverseString(0, 8, 11))
