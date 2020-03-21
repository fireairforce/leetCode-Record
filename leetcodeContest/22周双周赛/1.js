/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function(arr1, arr2, d) {
  let index = 0;
  for (let i = 0; i < arr1.length; i++) {
    let flag1 = true;
    for (let j = 0; j < arr2.length; j++) {
      if(Math.abs(arr1[i] - arr2[j])>d) {
        continue;
      } else {
        flag1 = false
      }
    }
    if(flag1) {
      index ++;
    }
  }
  // console.log(index);
  return index;
}

findTheDistanceValue([1,4,2,3],[-4,-3,6,10,20,30], 3)