/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps  = function(num) {
    let count = 0;
    while(num) {
        if(num%2===0) {
            num /= 2;
        } else {
            num --;
        }
        count ++;
    }
    return count;
};

// console.log(numberOfSteps(123));