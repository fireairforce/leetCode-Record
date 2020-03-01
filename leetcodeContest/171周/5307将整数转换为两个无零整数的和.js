/**
 * @param {number} n
 * @return {number[]}
 */
var getNoZeroIntegers = function(n) {
    for(let i = 1;i<=n;i++){
        for(let j = 1;j<=n;j++){
            if(i+j===n && (i+'').split('').indexOf('0')===-1 && (j+'').split('').indexOf('0')===-1){
                return [i,j];
            }
        }
    }
};
// console.log(getNoZeroIntegers(11));