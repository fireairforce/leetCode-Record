function endsWithVowel(str) {  
  var arr = str.split('');
  return /[a,e,i,o,u]/i.test(arr[arr.length-1])
}
// console.log(endsWithVowel('gorillf'));