function MoreThanHalfNum_Solution(numbers) {
  let hashTable = {};
  for (let i = 0; i < numbers.length; i++) {
    if (hashTable[numbers[i]]) {
      hashTable[numbers[i]]++;
    } else {
      hashTable[numbers[i]] = 1;
    }
  }
  for (let i in hashTable) {
    if (hashTable[i] > Math.floor(numbers.length / 2)) {
      return i;
    }
  }
  return 0;
}
module.exports = {
  MoreThanHalfNum_Solution: MoreThanHalfNum_Solution,
};
