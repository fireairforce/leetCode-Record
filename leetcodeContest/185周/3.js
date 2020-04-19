/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  croakOfFrogs = croakOfFrogs.split('')
  const hash = {}
  hash['c'] = 0
  hash['r'] = 0
  hash['o'] = 0
  hash['a'] = 0
  hash['k'] = 0
  for (let i = 0; i < croakOfFrogs.length; i++) {
    if (hash[croakOfFrogs[i]] === 0 || hash[croakOfFrogs[i]]) {
      hash[croakOfFrogs[i]]++
    }
  }
  let cLen = hash['c']
  let rLen = hash['r']
  let oLen = hash['o']
  let aLen = hash['a']
  let kLen = hash['k']
  if (
    Math.min(cLen, rLen, oLen, aLen, kLen) !==
    Math.max(cLen, rLen, oLen, aLen, kLen)
  ) {
    return -1
  }
  let len = cLen + rLen + oLen + aLen + kLen
  let res = 0
  let min = 999999
  while (len !== 0) {
    let str = []
    const index = []
    for (let i = 0; i < croakOfFrogs.length; i++) {
      if (str.length === 0) {
        if (croakOfFrogs[i] === 'c') {
          index.push(i)
          str.push(croakOfFrogs[i])
        }
      } else if (str.length !== 0 && str[str.length - 1] === 'c') {
        if (croakOfFrogs[i] === 'r') {
          index.push(i)
          str.push(croakOfFrogs[i])
        }
      } else if (str.length !== 0 && str[str.length - 1] === 'r') {
        if (croakOfFrogs[i] === 'o') {
          index.push(i)
          str.push(croakOfFrogs[i])
        }
      } else if (str.length !== 0 && str[str.length - 1] === 'o') {
        if (croakOfFrogs[i] === 'a') {
          index.push(i)
          str.push(croakOfFrogs[i])
        }
      } else if (str.length !== 0 && str[str.length - 1] === 'a') {
        if (croakOfFrogs[i] === 'k') {
          index.push(i)
          str.push(croakOfFrogs[i])
        }
      }
    }
    min = Math.min(min, index[index.length - 1])
    if (str.length === 5) {
      if (res === 0) {
        res++
      } else {
        if (index[0] < min) {
          res++
        }
      }
    }
    if (index.length < 4) {
      break
    }
    for (let i = 0; i < index.length; i++) {
      croakOfFrogs[index[i]] = 'x'
    }
  }
  if (res === 0) {
    return -1
  }
  for (let i = 0; i < croakOfFrogs.length; i++) {
    if (croakOfFrogs[i] !== 'x') {
      return -1
    }
  }
  return res
}
// console.log(minNumberOfFrogs('croakcroak'))
// console.log(minNumberOfFrogs('crcoakroak'))
// console.log(minNumberOfFrogs('croakcrook'))
// console.log(minNumberOfFrogs('croakcroa'))
// console.log(minNumberOfFrogs('aoocrrackk'))
// console.log(minNumberOfFrogs('crocakcroraoakk'))
// console.log(minNumberOfFrogs('okccaraoorrakkc'))

"ccccccccccrrccccccrcccccccccccrcccccccccrcccccccccccrcccccrcccrrcccccccccccccrocrrcccccccccrccrocccccrccccrrcccccccrrrcrrcrccrcoccroccrccccccccorocrocccrrrrcrccrcrcrcrccrcroccccrccccroorcacrkcccrrroacccrrrraocccrrcrrccorooccrocacckcrcrrrrrrkrrccrcoacrcorcrooccacorcrccccoocroacroraoaarcoorrcrcccccocrrcoccarrorccccrcraoocrrrcoaoroccooccororrrccrcrocrrcorooocorarccoccocrrrocaccrooaaarrcrarooaarrarrororrcrcckracaccorarorocacrrarorrraoacrcokcarcoccoorcrrkaocorcrcrcrooorrcrroorkkaaarkraroraraarooccrkcrcraocooaoocraoorrrccoaraocoorrcokrararrkaakaooroorcororcaorckrrooooakcarokokcoarcccroaakkrrororacrkraooacrkaraoacaraorrorrakaokrokraccaockrookrokoororoooorroaoaokccraoraraokakrookkroakkaookkooraaocakrkokoraoarrakakkakaroaaocakkarkoocokokkrcorkkoorrkraoorkokkarkakokkkracocoaaaaakaraaooraokarrakkorokkoakokakakkcracarcaoaaoaoorcaakkraooaoakkrrroaoaoaarkkarkarkrooaookkroaaarkooakarakkooaokkoorkroaaaokoarkorraoraorcokokaakkaakrkaaokaaaroarkokokkokkkoakaaookkcakkrakooaooroaaaaooaooorkakrkkakkkkaokkooaakorkaroaorkkokaakaaaaaocrrkakrooaaroroakrakrkrakaoaaakokkaaoakrkkoakocaookkakooorkakoaaaaakkokakkorakaaaaoaarkokorkakokakckckookkraooaakokrrakkrkookkaaoakaaaokkaokkaaoakarkakaakkakorkaakkakkkakaaoaakkkaoaokkkakkkoaroookakaokaakkkkkkakoaooakcokkkrrokkkkaoakckakokkocaokaakakaaakakaakakkkkrakoaokkaakkkkkokkkkkkkkrkakkokkroaakkakaoakkoakkkkkkakakakkkaakkkkakkkrkoak"