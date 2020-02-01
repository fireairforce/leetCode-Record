/**
 * @param {string} s
 * @return {string}
 */
const freqAlphabets = (s) => {
    const ary = s.match(/\d{2}#|\d/g)
    let str = ''
    for (let i = 0; i < ary.length; i++) {
      const int = Number.parseInt(ary[i])
      str += String.fromCharCode(int + 96)
    }
    return  str
  }