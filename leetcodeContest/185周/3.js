/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
var minNumberOfFrogs = function (croakOfFrogs) {
  let res = 0
  let c = 0,
    r = 0,
    o = 0,
    a = 0,
    k = 0
  for (let i = 0; i < croakOfFrogs.length; i++) {
    if (croakOfFrogs[i] === 'c') {
      c++
    } else if (croakOfFrogs[i] === 'r') {
      r++
    } else if (croakOfFrogs[i] === 'o') {
      o++
    } else if (croakOfFrogs[i] === 'a') {
      a++
    } else if (croakOfFrogs[i] === 'k') {
      k++
    }
    res = Math.max(c - k, res)
    if (c >= r && r >= o && o >= a && a >= k) {
      continue
    } else {
      return -1
    }
  }
  if (c == a && a == o && o == k && r == c) {
    return res
  } else return -1
}
console.log(minNumberOfFrogs('croakcroak'))
console.log(minNumberOfFrogs('crcoakroak'))
console.log(minNumberOfFrogs('croakcrook'))
console.log(minNumberOfFrogs('croakcroa'))
console.log(minNumberOfFrogs('aoocrrackk'))
console.log(minNumberOfFrogs('crocakcroraoakk'))
console.log(minNumberOfFrogs('okccaraoorrakkc'))
console.log(
  minNumberOfFrogs(
    'ccccccccccrrccccccrcccccccccccrcccccccccrcccccccccccrcccccrcccrrcccccccccccccrocrrcccccccccrccrocccccrccccrrcccccccrrrcrrcrccrcoccroccrccccccccorocrocccrrrrcrccrcrcrcrccrcroccccrccccroorcacrkcccrrroacccrrrraocccrrcrrccorooccrocacckcrcrrrrrrkrrccrcoacrcorcrooccacorcrccccoocroacroraoaarcoorrcrcccccocrrcoccarrorccccrcraoocrrrcoaoroccooccororrrccrcrocrrcorooocorarccoccocrrrocaccrooaaarrcrarooaarrarrororrcrcckracaccorarorocacrrarorrraoacrcokcarcoccoorcrrkaocorcrcrcrooorrcrroorkkaaarkraroraraarooccrkcrcraocooaoocraoorrrccoaraocoorrcokrararrkaakaooroorcororcaorckrrooooakcarokokcoarcccroaakkrrororacrkraooacrkaraoacaraorrorrakaokrokraccaockrookrokoororoooorroaoaokccraoraraokakrookkroakkaookkooraaocakrkokoraoarrakakkakaroaaocakkarkoocokokkrcorkkoorrkraoorkokkarkakokkkracocoaaaaakaraaooraokarrakkorokkoakokakakkcracarcaoaaoaoorcaakkraooaoakkrrroaoaoaarkkarkarkrooaookkroaaarkooakarakkooaokkoorkroaaaokoarkorraoraorcokokaakkaakrkaaokaaaroarkokokkokkkoakaaookkcakkrakooaooroaaaaooaooorkakrkkakkkkaokkooaakorkaroaorkkokaakaaaaaocrrkakrooaaroroakrakrkrakaoaaakokkaaoakrkkoakocaookkakooorkakoaaaaakkokakkorakaaaaoaarkokorkakokakckckookkraooaakokrrakkrkookkaaoakaaaokkaokkaaoakarkakaakkakorkaakkakkkakaaoaakkkaoaokkkakkkoaroookakaokaakkkkkkakoaooakcokkkrrokkkkaoakckakokkocaokaakakaaakakaakakkkkrakoaokkaakkkkkokkkkkkkkrkakkokkroaakkakaoakkoakkkkkkakakakkkaakkkkakkkrkoak',
  ),
)
