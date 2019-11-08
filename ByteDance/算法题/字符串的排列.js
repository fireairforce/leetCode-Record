/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */

//  暴力过不去
var checkInclusion = function(s1, s2) {
  if (s1.length === 0 || s1.length > s2.length) {
    return false;
  }
  let len = s1.length;
  const hashS1 = {};
  const hashS2 = {};
  for (let i = 0; i < len; i++) {
    hashS1[s1[i]] = 0;
    hashS2[s1[i]] = 0;
  }
  for (let i = 0; i < s2.length; i++) {
    hashS1[s2[i]] = 0;
    hashS2[s2[i]] = 0;
  }
  for (let i = 0; i < len; i++) {
    hashS1[s1[i]]++;
    hashS2[s2[i]]++;
  }
  for (let i = len; i < s2.length; i++) {
    if (isEuqalObj(hashS1, hashS2) === true) {
      return true;
    }
    hashS2[s2[i - len]]--;
    hashS2[s2[i]]++;
  }
  return isEuqalObj(hashS1, hashS2);
};

const isEuqalObj = (a1, a2) => {
  let a1Props = Object.getOwnPropertyNames(a1);
  let a2Props = Object.getOwnPropertyNames(a2);
  if (a1Props.length !== a2Props.length) {
    return false;
  }
  for (let i = 0; i < a1Props.length; i++) {
    let propName = a1Props[i];
    if (a1[propName] !== a2[propName]) {
      return false;
    }
  }
  return true;
};
// console.log("qqq");
// console.log(checkInclusion("ab", "eidbaooo"));
